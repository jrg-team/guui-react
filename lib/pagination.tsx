import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from './component';

export interface IProps {
  totalPage: number;
  currentPage: number;
  onChange?: (name: number) => void;
}

interface IState {
  x: string;
}

class Pagination extends Component<IProps, IState> {
  public static propTypes = {
    totalPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  };

  constructor(props: IProps) {
    super(props);
  }

  onClickPage = (currentPage: number, e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onChange && this.props.onChange(currentPage);
  }

  render() {
    const items = [];
    for (let i = 0; i < this.props.totalPage; i++) {
      items.push(
        <span onClick={this.onClickPage.bind(null, i + 1)} key={i}
          className={this.sc('item', i + 1 === this.props.currentPage ? 'active' : '')}
          data-name={i + 1}>{i}</span>
      );
    }
    return (
      <div className={this.sc()}>
        <span className={this.sc('prev')}
          onClick={this.onClickPage.bind(null, this.props.currentPage - 1)}></span>
        {items}
        <span className={this.sc('next')}
          onClick={this.onClickPage.bind(null, this.props.currentPage + 1)}></span>
      </div>
    )
      ;
  }
}

export default Pagination;