import * as PropTypes from 'prop-types';
import * as React from 'react';
import '../stylesheets/tabs.sass';
import Component from './component';
import {IProps as CollapseItemProps} from './collapseItem';

interface IProps {
  selectedItems: string[];
  single: boolean;
  onChange?: (name: string) => void;
  children?: Array<React.ReactElement<CollapseItemProps>>;
}

interface IState {
  x: string;
}

class Collapse extends Component<IProps, IState> {
  public static propTypes = {
    selectedItems: PropTypes.array.isRequired,
    single: PropTypes.bool.isRequired
  };

  public static defaultProps: Partial<IProps> = {
    single: false
  };

  constructor(props: IProps) {
    super(props);
  }

  onClickItem = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    this.props.onChange && this.props.onChange(name);
  }

  render() {
    const {children} = this.props;
    return (
      <div className={this.sc()}>
        {children}
      </div>
    );
  }
}

export default Collapse;
