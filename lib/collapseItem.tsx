import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from './component'

export interface IProps {
  title: string;
  name: string;
}

interface IState {
  x: string
}

class CollapseItem extends Component<IProps, IState> {
  public static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div className={this.sc()}>
        <div className={this.sc('title')} data-name={this.props.name}>{this.props.title}</div>
        <div className={this.sc('content')}>{this.props.children}</div>
      </div>
    );
  }
}

export default CollapseItem;
