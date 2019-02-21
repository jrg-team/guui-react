import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import {range} from 'utils/collection';
import './pager.scss';
import Icon from '../icon/icon';

const componentName = 'Pager';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
  current?: number;
  total: number;
  defaultCurrent?: number;
  onChange?: (value: number) => void;
}

interface IState {
  current?: number;
}

class Pager extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  get current() {
    if ('defaultCurrent' in this.props) {
      return this.state.current || 1;
    } else {
      return this.props.current || 1;
    }
  }

  set current(value: number) {
    if ('defaultCurrent' in this.props) {
      this.setState({current: value});
    } else {
      this.props.onChange && this.props.onChange(value);
    }
  }

  onClickItem = (value: number, e: React.MouseEvent<HTMLSpanElement>) => {
    if(value <= this.props.total && value >= 1) {
      this.current = value;
    }
  };

  jumpPage = (index: number) => {
    const prev = this.current - 5 <= 0 ? 1 : this.current - 5;
    const next = this.current + 5 >= this.props.total ? this.props.total : this.current + 5;
    return index === 1 ? prev : next;
  };

  get items() {
    return range(1, this.props.total)
      .filter((item) => item === 1 || item === this.props.total || Math.abs(item - this.current) <= 2)
      .reduce((prev, next) => {
        const last = prev[prev.length - 1];
        const x = last !== -1 && last - next < -1;
        return prev.concat(x ? [-1, next] : [next]);
      }, [] as number[])
      .map((item, index) => item === -1 ?
        <span key={index} className={sc('separator')} onClick={this.onClickItem.bind(null, this.jumpPage(index))}>...</span>
        : <button key={index} className={sc('item')} onClick={this.onClickItem.bind(null, item)}>{item}</button>);
  }

  render() {
    return (
      <div className={sc()}>
        <button className={sc('prev')} onClick={this.onClickItem.bind(null, this.current - 1)}><Icon name="left"/>
        </button>
        {this.items}
        <button className={sc('next')} onClick={this.onClickItem.bind(null, this.current + 1)}><Icon name="right"/>
        </button>
      </div>
    );
  }
}

export default Pager;
