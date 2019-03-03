import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import PropTypes from 'prop-types';
import './slides.scss';
import {ReactElement} from 'react';

const componentName = 'Slides';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
  beforeChange?: (current: number, prev: number) => void;
  afterChange?: (current: number, prev: number) => void;
  vertical?: boolean;
  autoplay?: boolean;
  current?: number;
  navVisible?: boolean;
  defaultCurrent?: number;
  children: Array<ReactElement<any>>;
}

interface IState {
  current?: number;
  width?: number;
}

class Slides extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {
    navVisible: true
  };
  static propTypes = {
    vertical: PropTypes.bool,
    autoplay: PropTypes.bool,
    navVisible: PropTypes.bool,
    current: PropTypes.number,
    defaultCurrent: PropTypes.number,
  };

  private readonly refSlides: React.RefObject<HTMLDivElement>;
  private refSlidesInner: React.RefObject<HTMLDivElement>;
  private prev: number;
  private autoplayTimerId: number;

  get current() {
    return ('defaultCurrent' in this.props ? this.state.current : this.props.current) || 1;
  }

  set current(value: number) {
    this.prev = this.current;
    this.props.beforeChange && this.props.beforeChange(value, this.prev);
    if ('defaultCurrent' in this.props) {
      this.setState({current: value});
    }
    this.jumpTo(value);
  }

  jumpTo(value: number): void {
    this.refSlidesInner.current!.style.transform = `translateX(-${(this.state.width || 0) * (value - 1)}px)`;
  }

  afterChange(): void {
    this.props.afterChange && this.props.afterChange(this.current, this.prev);
  }

  constructor(props: IProps) {
    super(props);
    if ('defaultCurrent' in this.props) {
      this.state = {
        current: this.props.defaultCurrent,
        width: 0
      };
    } else {
      this.state = {
        width: 0
      };
    }
    this.refSlides = React.createRef();
    this.refSlidesInner = React.createRef();
  }

  componentDidMount(): void {
    const width = this.refSlides.current!.offsetWidth;
    this.refSlidesInner.current!.addEventListener('transitionend', this.afterChange.bind(this));
    if (this.props.autoplay) {
      this.autoplayTimerId = window.setInterval(() => {
        if (this.current === this.props.children.length) {
          this.current = 1;
        } else {
          this.current += 1;
        }
      }, 3000);
    }
    this.setState({width}, () => {
      this.current = this.current;
      this.refSlidesInner.current!.style.transition = 'transform 1s';
    });
  }

  componentWillUnmount(): void {
    this.refSlidesInner.current!.removeEventListener('transitionend', this.afterChange.bind(this));
    window.clearInterval(this.autoplayTimerId);
  }

  renderNav() {
    return (
      <div className={sc('nav')}>
        {this.props.children
          .map((c: ReactElement<any>, i) => {
            const active: string = this.current === i + 1 ? 'active' : '';
            return <span className={active} onClick={e => this.current = i + 1}
                         key={i}></span>;
          })
        }
      </div>
    );
  }

  renderChildren() {
    return (
      <div className={sc('inner')} ref={this.refSlidesInner}
           style={{width: (this.state.width || 0) * this.props.children.length}}>
        {
          this.props.children
            .map((c: ReactElement<any>, i) => {
              return <div key={i} className={sc('slide')}>{c}</div>;
            })
        }
      </div>
    );
  }

  render() {
    return (
      <div className={`${sc()} ${this.props.className}`} ref={this.refSlides}>
        {this.renderChildren()}
        {this.props.navVisible && this.renderNav()}
      </div>
    );
  }
}

export default Slides;
