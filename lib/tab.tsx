import * as PropTypes from 'prop-types';
import * as React from 'react';
import '../stylesheets/tab.sass'
import Component from './component'

export interface IProps {
  title: string;
  name: string;
  className?: string;
}

interface IState {
  x: string
}

class Tab extends Component<IProps, IState> {
  public static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div className={this.sc()}>
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
