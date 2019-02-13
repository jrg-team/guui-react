import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import {createRef} from 'react';
import './scroll.scss';
import debounce from 'utils/debounce';

const componentName = 'Scroll';
const sc = createScopedClasses(componentName);

interface IState {
  contentHeight: number;
  viewHeight: number;
  y: number;
  scrollbarVisible: boolean;
}

export interface IProps extends IStyledProps {
}

class Scroll extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};
  private readonly refWrapper: React.RefObject<HTMLDivElement>;
  private readonly refContent: React.RefObject<HTMLDivElement>;
  private readonly refBar: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.refWrapper = createRef();
    this.refContent = createRef();
    this.refBar = createRef();
    this.state = {
      y: 0,
      contentHeight: 0,
      viewHeight: 0,
      scrollbarVisible: false,
    };
  }

  get y() {
    return this.state.y;
  }

  set y(value) {
    if (value < 0) {
      this.setState({y: 0});
    } else if (value > this.scrollYMax) {
      this.setState({y: this.scrollYMax});
    } else {
      this.setState({y: value});
    }
  }

  get contentRect() {
    return this.refContent.current!.getBoundingClientRect();
  }

  get wrapperRect() {
    return this.refWrapper.current!.getBoundingClientRect();
  }

  get barHeight() {
    return this.state.viewHeight * this.state.viewHeight / this.state.contentHeight;
  }

  get barY() {
    return this.state.y * this.state.viewHeight / this.state.contentHeight;
  }

  get scrollYMax() {
    if (!this.refContent.current || !this.refWrapper.current) {
      return 0;
    }
    const wrapper = this.refWrapper.current;
    const {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(wrapper);
    const borderTopWidthNumber = parseInt(borderTopWidth!, 10);
    const borderBottomWidthNumber = parseInt(borderBottomWidth!, 10);
    const paddingTopNumber = parseInt(paddingTop!, 10);
    const paddingBottomNumber = parseInt(paddingBottom!, 10);
    return this.contentRect.height! - this.wrapperRect.height! + (borderTopWidthNumber + borderBottomWidthNumber + paddingTopNumber + paddingBottomNumber);
  }

  updateContentY(deltaY: number, callback?: () => void) {
    const y = this.y + this.scale(deltaY, 3, 60);
    if (y >= 0 && y <= this.scrollYMax) { callback && callback(); }
    this.y = y;
  }

  scale(n: number, rate: number, limit: number) {
    const abs = Math.abs(n);
    if (abs < 2) {
      return n;
    }
    const result = n * rate;
    if (abs > limit) {
      return result > 0 ? limit : -limit;
    } else {
      return result;
    }
  }

  onWheel = (e: WheelEvent) => {
    this.updateContentY(e.deltaY, () => e.preventDefault());
  };
  lastPosition = [0, 0];
  onTouchStart = (e: TouchEvent) => {
    const {clientX, clientY} = e.touches[0];
    this.lastPosition = [clientX, clientY];
  };
  onTouchMove = (e: TouchEvent) => {
    const {clientX, clientY} = e.touches[0];
    const newPosition = [clientX, clientY];
    const deltaY = newPosition[1] - this.lastPosition[1];
    this.updateContentY(-deltaY, () => e.preventDefault());
    this.lastPosition = newPosition;
  };
  onMouseEnter = (e: MouseEvent) => {
    console.log('1');
    if (this.dragging) {
      this.hideScrollbarAfterDrag = false;
      return;
    }
    console.log('2');
    this.setState({
      scrollbarVisible: true
    });
  };
  onMouseLeave = (e: MouseEvent) => {
    if (this.dragging) {
      this.hideScrollbarAfterDrag = true;
      return;
    }
    this.setState({
      scrollbarVisible: false
    });
  };

  getHeights(wrapper: HTMLDivElement, content: HTMLDivElement) {
    const {height: contentHeight} = content.getBoundingClientRect();
    const {height: viewHeight} = wrapper.getBoundingClientRect();
    this.setState({contentHeight, viewHeight});
  }

  bindEvents(wrapper: HTMLDivElement) {
    wrapper.addEventListener('wheel', this.onWheel);
    wrapper.addEventListener('mouseenter', this.onMouseEnter);
    wrapper.addEventListener('mouseleave', this.onMouseLeave);
    wrapper.addEventListener('touchmove', this.onTouchMove);
    wrapper.addEventListener('touchstart', this.onTouchStart);
  }

  listenToContent(wrapper: HTMLDivElement, content: HTMLDivElement) {
    const targetNode = content;
    const config = {attributes: true, childList: true, subtree: true};
    const onChange = debounce(() => {
      this.getHeights(wrapper, content);
      console.log('ok');
    }, 100);
    const callback: MutationCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          onChange();
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  componentDidMount(): void {
    const content = this.refContent.current;
    const wrapper = this.refWrapper.current;
    if (content && wrapper) {
      this.getHeights(wrapper, content);
      this.bindEvents(wrapper);
      this.listenToContent(wrapper, content);
    }
  }

  componentWillUnmount(): void {
    const content = this.refContent.current;
    const wrapper = this.refWrapper.current;
    if (content && wrapper) {
      wrapper.removeEventListener('wheel', this.onWheel);
    }
  }

  dragging = false;
  hideScrollbarAfterDrag = false;
  position = [0, 0];

  onDragging = (e: MouseEvent) => {
    const {pageX, pageY} = e;
    const newPosition = [pageX, pageY];
    const deltaY = newPosition[1] - this.position[1];
    const deltaT = deltaY * this.state.contentHeight / this.state.viewHeight;
    this.y += deltaT;
    this.position = newPosition;
  };
  onDragEnd = () => {
    this.dragging = false;
    if (this.hideScrollbarAfterDrag) {
      this.setState({
        scrollbarVisible: false
      });
    }
    document.removeEventListener('mousemove', this.onDragging);
    document.removeEventListener('mouseup', this.onDragEnd);
  };
  onDragBar = (e: React.MouseEvent) => {
    this.dragging = true;
    const {pageX, pageY} = e;
    this.position = [pageX, pageY];
    document.addEventListener('mousemove', this.onDragging);
    document.addEventListener('mouseup', this.onDragEnd);
  };

  render() {
    return (
      <div ref={this.refWrapper} className={sc()} style={this.props.style}>
        <div ref={this.refContent} style={{
          transform: `translateY(-${this.state.y}px)`,
          transition: `all 50ms`
        }}>
          {this.props.children}
        </div>
        {this.state.scrollbarVisible && (
          <div className={sc('track')}>
            <div ref={this.refBar} className={sc('track-bar')}
                 style={{
                   transform: `translateY(${this.barY}px)`,
                   height: `${this.barHeight}px`
                 }}>
              <div className={sc('track-bar-inner')}
                   onMouseDown={this.onDragBar}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

}

export default Scroll;
