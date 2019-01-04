import * as React from 'react';
import * as PropTypes from 'prop-types';
import {createScopedClasses} from 'utils/classes';
import {MouseEventHandler, PureComponent, ReactChild, ReactElement, RefObject, Fragment} from 'react';
import * as ReactDOM from 'react-dom';
import ClickOutside from '../clickOutside/clickOutside';
import './popover.scss';

const componentName = 'Popover';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  content: ReactChild;
  children: ReactElement<any>;
  open?: boolean;
  trigger?: 'click' | 'hover' | 'manual';
  block?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
  container?: RefObject<Element>;
}

interface ITriggers {
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onClickOutside?: MouseEventHandler;
}

interface IState {
  open?: boolean;
}

class Popover extends PureComponent<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {
    trigger: 'click',
    block: false,
    position: 'top'
  };
  static propTypes = {
    content: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
  };
  private readonly refContent: React.RefObject<HTMLDivElement>;
  private readonly refTrigger: React.RefObject<HTMLDivElement>;
  private timer?: number;
  private closeDelay = 200;

  constructor(props: IProps) {
    super(props);
    this.state = {open: false};
    this.refContent = React.createRef();
    this.refTrigger = React.createRef();
  }

  get open() {
    const {props, state} = this;
    return props.trigger === 'manual' ? props.open : state.open;
  }

  private contentHandlers: Partial<ITriggers> | null = this.props.trigger === 'hover' ? {
    onMouseEnter: () => this.doOpen(),
    onMouseLeave: () => this.close(this.closeDelay)
  } : null;

  get content() {
    const content = (
      <div ref={this.refContent} className={sc('content', `content-${this.props.position}`)}
        {...this.contentHandlers}>
        {typeof this.props.content === 'string' ?
          <span className={sc('content-stringWrapper')}>{this.props.content}</span> :
          this.props.content}
      </div>
    );
    return this.open && content;
  }

  private positionContent = () => {
    const content = this.refContent.current;
    const trigger = this.refTrigger.current;
    const {left, top, width, height} = trigger!.getBoundingClientRect();
    const {width: contentWidth, height: contentHeight} = content!.getBoundingClientRect();
    const {left: containerLeft, top: containerTop} = this.container.getBoundingClientRect();
    switch (this.props.position) {
      case 'top':
        content!.style.top = top - containerTop - contentHeight - 8 + 'px';
        content!.style.left = left - containerLeft + (width / 2) - (contentWidth / 2) + 'px';
        break;
      case 'bottom':
        content!.style.top = top - containerTop + height + 8 + 'px';
        content!.style.left = left - containerLeft + (width / 2) - (contentWidth / 2) + 'px';
        break;
      case 'left':
        content!.style.top = top - containerTop + (height / 2) - (contentHeight / 2) + 'px';
        content!.style.left = left - containerLeft - contentWidth - 8 + 'px';
        break;
      case 'right':
        content!.style.top = top - containerTop + (height / 2) - (contentHeight / 2) + 'px';
        content!.style.left = left - containerLeft + width + 8 + 'px';
        break;
      case 'topLeft':
        content!.style.top = top - containerTop - contentHeight - 8 + 'px';
        content!.style.left = left - containerLeft + 'px';
        break;
      case 'topRight':
        content!.style.top = top - containerTop - contentHeight - 8 + 'px';
        content!.style.left = left - containerLeft + width - contentWidth + 'px';
        break;
      case 'bottomLeft':
        content!.style.top = top - containerTop + height + 8 + 'px';
        content!.style.left = left - containerLeft + 'px';
        break;
      case 'bottomRight':
        content!.style.top = top - containerTop + height + 8 + 'px';
        content!.style.left = left - containerLeft + width - contentWidth + 'px';
        break;
    }
  };

  private nowOrLater(action: () => void, delay?: number) {
    if (this.timer) { window.clearTimeout(this.timer); }
    if (delay) {
      this.timer = window.setTimeout(action, delay);
    } else {
      action();
    }
  }

  close(delay?: number) {
    this.nowOrLater(() => {
      if (this.state.open) {
        this.setState((prev, props) => ({open: false}));
      }
    }, delay);
  }

  doOpen(delay?: number) {
    this.nowOrLater(() => {
      if (!this.state.open) {
        this.setState((prev, props) => ({open: true}));
      }
    }, delay);
  }

  toggle(delay?: number) {
    this.nowOrLater(() => {
      if (this.state.open) {
        this.close();
      } else {
        this.doOpen();
      }
    }, delay);
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    if (this.props.trigger !== 'manual') {
      if (prevState.open === false && this.state.open === true) {
        this.positionContent();
      }
    } else {
      if (prevProps.open === false && this.props.open === true) {
        this.positionContent();
      }
    }
  }

  get container() {
    return (this.props.container && this.props.container.current) || document.body;
  }

  render() {
    const {props, state} = this;
    switch (props.trigger) {
      case 'manual':
        return this.renderComponent(!!props.open, {});
        break;
      case 'click':
        return this.renderComponent(!!state.open, {
          onClick: () => this.toggle(), onClickOutside: () => this.close()
        });
        break;
      case 'hover':
        return this.renderComponent(!!state.open, {
          onMouseEnter: () => this.doOpen(), onMouseLeave: () => this.close(this.closeDelay)
        });
        break;
      default:
        return new Error('invalid trigger');
    }
  }

  wrapInDiv(inner: ReactChild) {
    const {props} = this;
    return (
      <div className={sc('', {block: props.block})}>
        {inner}
      </div>
    );
  }
  wrapInClickOutside(inner: ReactChild, handlers: Partial<ITriggers>) {
    const {props, refContent} = this;
    const {onClickOutside} = handlers;
    return (
      <ClickOutside className={sc('', {block: props.block})} handler={onClickOutside}
        exclude={refContent}>
        {inner}
      </ClickOutside>);
  }

  renderComponent(open: boolean, handlers: ITriggers) {
    const {props, refTrigger} = this;
    const {onClickOutside, ...restHandlers} = handlers;
    const inner = (
      <Fragment>
        <div className={sc('trigger')} {...restHandlers} ref={refTrigger}>
          {props.children}
        </div>
        {ReactDOM.createPortal(this.content, this.container)}
      </Fragment>
    );
    return this.props.trigger === 'click' ? this.wrapInClickOutside(inner, handlers) : this.wrapInDiv(inner);
  }

}

export default Popover;
