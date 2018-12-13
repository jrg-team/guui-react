// import * as PropTypes from 'prop-types';
// import * as React from 'react';
// import Icon from './icon'
// import Component from './component'
//
// export interface IProps {
//   icon?: string;
//   iconPosition?: 'left' | 'right';
//   size: 'small' | 'default' | 'large';
//   color: 'blue' | 'green' | 'red' | 'white';
//   ghost: boolean;
//   badge?: number;
//   href?: string;
//   target?: string;
//   disabled?: boolean;
//   loading?: boolean;
//   type?: 'button' | 'submit';
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   onTouch?: React.TouchEventHandler<HTMLButtonElement>;
// }
//
// interface IState {
//   x: string
// }
//
// export class Button extends Component<IProps, IState> {
//   static propTypes = {
//     icon: PropTypes.string,
//   }
//
//   public static defaultProps: Partial<IProps> = {
//     iconPosition: 'left',
//     size: 'default',
//     type: 'button',
//     color: 'white',
//     ghost: false
//   };
//   constructor(props: IProps) {
//     super(props)
//     this.state = {
//       x: '1'
//     }
//   }
//
//   onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
//     this.setState({
//       x: '2'
//     })
//     this.props.onClick && this.props.onClick(e)
//   }
//   render() {
//     return (
//       <button onClick={this.onClick} className={this.sc()} disabled={this.props.disabled}>
//         {this.props.children}
//         <Icon name="alipay"></Icon>
//         <div className={this.sc('icon', 'active')}></div>
//       </button>
//     );
//   }
// }

import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import Icon from '../icon/icon';

const componentName = 'Button';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconFill?: string;
  size?: 'small' | 'big';
  level?: 'default' | 'important' | 'danger';
  ghost?: boolean;
  badge?: number;
  href?: string;
  target?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onTouch?: React.TouchEventHandler<HTMLButtonElement>;
};

const Button: GFC<IProps> = (props) => {
  const disabled = props.loading || props.disabled;
  const buttonClass = classes(sc('', props.level, props.size, {
    ghost: props.ghost,
    disabled: props.disabled
  }), props.className);
  const icon = props.icon && <Icon name={props.icon} fill={props.iconFill}/>;
  const loadingIcon = <Icon name="loading"/>;
  const onClick = (e: React.MouseEvent) => {
    props.onClick && props.onClick.call(e.target, e);
  };
  const button = (
    <button className={buttonClass} style={props.style} onClick={onClick}
      disabled={disabled}>
      {props.loading ? loadingIcon : icon}
      {typeof props.children === 'string' ? <span>{props.children}</span> : props.children}
    </button>
  );
  const link = <a href="#"></a>;

  return props.href ? link : button;
};
Button.displayName = componentName;
Button.defaultProps = {
  level: 'default',
  ghost: false,
  iconPosition: 'left',
  disabled: false,
  loading: false,
  type: 'button'
};
Button.propTypes = {};
export default Button;
