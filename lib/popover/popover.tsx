import * as React from 'react';
import * as PropTypes from 'prop-types';
import {createScopedClasses} from 'utils/classes';
import {MouseEventHandler, PureComponent, ReactChild, ReactElement, RefObject} from 'react';
import * as ReactDOM from 'react-dom';
import ClickOutside from '../clickOutside';
import './popover.scss';

const componentName = 'Popover';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  content: ReactChild;
  children: ReactElement<any>;
  open?: boolean;
  trigger?: 'click' | 'hover' | 'manual';
  block?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  container?: RefObject<Element>
};

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
    block: false,
    position: 'top'
  };
  static propTypes = {
    content: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
  };
  private readonly refContent: React.RefObject<HTMLDivElement>;
  private readonly refTrigger: React.RefObject<HTMLDivElement>;

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

  get content() {
    const content = <div ref={this.refContent} className={sc('content')}> {this.props.content} </div>;
    return this.open && content;
  }

  private onClick: MouseEventHandler = (e) => {
    this.setState((prev, props) => {
      return {open: !prev.open};
    });
  };
  private onClickOutside = () => {
    if (this.props.trigger === 'click' && this.state.open === true) {
      this.setState((prev, props) => {
        return {open: false};
      });
    }
  };

  private positionContent = () => {
    const content = this.refContent.current;
    const trigger = this.refTrigger.current;
    const {left, top, width} = trigger!.getBoundingClientRect();
    const {width: contentWidth, height: contentHeight} = content!.getBoundingClientRect();
    const {left: containerLeft, top: containerTop} = this.container.getBoundingClientRect();
    content!.style.top = top - containerTop - contentHeight - 8 + 'px';
    content!.style.left = left - containerLeft + (width / 2) - (contentWidth / 2) + 'px';

  };

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
    const {props} = this;
    if (props.trigger === 'click') {
      return this.renderComponent(!!this.state.open, {onClick: this.onClick, onClickOutside: this.onClickOutside});
    } else {
      return this.renderComponent(!!props.open, {});
    }
  }

  renderComponent(open: boolean, handlers: ITriggers) {
    const {props} = this;
    const {onClickOutside, ...restHandlers} = handlers;
    return (
      <ClickOutside className={sc('', {block: props.block})} handler={onClickOutside}
        exclude={this.refContent}
      >
        <div className={sc('trigger')} {...restHandlers} ref={this.refTrigger}>
          {props.children}
        </div>
        {ReactDOM.createPortal(this.content, this.container)}
      </ClickOutside>
    );
  }

}

export default Popover;
