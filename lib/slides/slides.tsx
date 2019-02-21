import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Slides';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
  beforeChange?: (current: number, prev: number) => void;
  afterChange?: (current: number, prev: number) => void;
  vertical?: boolean;
  autoplay?: boolean;
  current?: number;
  defaultCurrent?: number;
}

interface IState {
  current?: number;
}

class Slides extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  get current() {
    return ('defaultCurrent' in this.props ? this.props.current : this.state.current) || 1;
  }

  set current(value: number) {
    if ('defaultCurrent' in this.props) {
      this.setState({current: value});
    } else {
      this.props.afterChange && this.props.afterChange(value, 1);
    }
  }

  constructor(props: IProps) {
    super(props);
    if (!('defaultCurrent' in this.props)) {
      this.state = {
        current: this.props.defaultCurrent
      };
    }
  }

  render() {
    return (
      <div className={sc()}>
        {this.current}
      </div>
    );
  }
}

export default Slides;
