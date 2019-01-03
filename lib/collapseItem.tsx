import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from './component';

export interface IProps {
  title: string;
  name: string;
}

interface IState {
  active: boolean;
}

class CollapseItem extends Component<IProps, IState> {
  public static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  setActive(bool: boolean) {
    this.setState({
      active: bool
    });
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('todo');
  }

  render() {
    return (
      <div className="gu-collapse-item gu-collapse-item-active" onClick={this.onClick}>
        <header className={this.sc('title')}>{this.props.title}</header>
        <div className={this.sc('content')}>{this.props.children}</div>
      </div>
    );
  }
}

export default CollapseItem;
