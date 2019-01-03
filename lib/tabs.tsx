import * as PropTypes from 'prop-types';
import * as React from 'react';
import '../stylesheets/tabs.sass';
import Component from './component';
import {IProps as TabProps} from './tab';

interface IProps {
  selected: string;
  onChange?: (name: string) => void;
  children?: Array<React.ReactElement<TabProps>>;
  autoChange?: boolean;
}

interface IState {
  x: string;
}

class Tabs extends Component<IProps, IState> {
  public static propTypes = {
    selected: PropTypes.string.isRequired
  };

  public static defaultProps: Partial<IProps> = {
    autoChange: false
  };

  constructor(props: IProps) {
    super(props);
  }

  onClickTitle = (name: string, e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onChange && this.props.onChange(name);
  }

  render() {
    const {children} = this.props;
    const items = children && children.map((x, index) => {
      return <span onClick={this.onClickTitle.bind(null, x.props.name)} key={index} data-name={x.props.name}>{x.props.title}</span>;
    });
    return (
      <div className={this.sc()}>
        {items}
        {children}
      </div>
    );
  }
}

export default Tabs;
