import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from './icon'
import './button.sass'
import Component from './component'

interface IProps {
  icon?: string;
  iconPosition?: 'left' | 'right';
  size: 'small' | 'default' | 'large';
  color: 'blue' | 'green' | 'red' | 'white';
  ghost: boolean;
  badge?: number;
  href?: string;
  target?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onTouch?: React.TouchEventHandler<HTMLButtonElement>;
}

interface IState {
  x: string
}

class Button extends Component<IProps, IState> {
  static propTypes = {
    icon: PropTypes.string,
  }

  public static defaultProps: Partial<IProps> = {
    iconPosition: 'left',
    size: 'default',
    type: 'button',
    color: 'white',
    ghost: false
  };
  constructor(props: IProps) {
    super(props)
    this.state = {
      x: '1'
    }
  }

  onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    this.setState({
      x: '2'
    })
    this.props.onClick && this.props.onClick(e)
  }
  render() {
    return (
      <button onClick={this.onClick} className={this.sc()} disabled={this.props.disabled}>
        {this.props.children}
        <Icon name="alipay"></Icon>
        <div className={this.sc('icon', 'active')}></div>
      </button>
    );
  }
}

export default Button;
