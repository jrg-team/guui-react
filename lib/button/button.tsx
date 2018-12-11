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

const componentName = 'Button';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
  icon?: string;
  iconPosition?: 'left' | 'right';
  size?: 'small' | 'default' | 'large';
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
  const button = (
    <button className={classes(sc('', props.level, {ghost: props.ghost}), props.className)} style={props.style}>
      {props.children}
    </button>
  );
  const link = <a href="#"></a>;

  return props.href ? link : button;
};
Button.displayName = componentName;
Button.defaultProps = {
  size: 'default',
  level: 'default',
  ghost: false,
  iconPosition: 'left',
  disabled: false,
  loading: false,
  type: 'button'
};
Button.propTypes = {};
export default Button;
