import * as PropTypes from 'prop-types';
import * as React from 'react';
import './tabs.sass'
import Component from './component'
import {IProps as CollapseItemProps} from './collapseItem'

interface IProps {
  activeKey: string[] | string;
  onChange?: (name: string) => void;
  children?: Array<React.ReactElement<CollapseItemProps>>;
}

interface IState {
  x: string
}

class Collapse extends Component<IProps, IState> {
  public static propTypes = {
    activeKey: PropTypes.string.isRequired
  };

  constructor(props: IProps) {
    super(props)
  }

  onClickItem = (name: string, e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onChange && this.props.onChange(name)
  }

  render() {
    const {children} = this.props
    return (
      <div className={this.sc()}>
        {children}
      </div>
    );
  }
}

export default Collapse;
