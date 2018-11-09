import * as PropTypes from 'prop-types';
import * as React from 'react';

import Component from './component'

interface IProps {
  size: 'small' | 'default' | 'large';
  value: string,
  type?: 'text' | 'textarea'
  placeholder?: string,
  disabled?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

interface IState {
  x: string
}

class Input extends Component<IProps, IState>{
  static propTypes = {
    value: PropTypes.string
  }

  public static defaultProps: Partial<IProps> = {
    size: 'default',
    type: 'text',
    disabled: false
  };

  constructor(props: IProps) {
    super(props)
  }

  onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.props.onChange && this.props.onChange(e)
  }

  onPressEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    console.log(1);
    this.props.onPressEnter && this.props.onPressEnter(e)
  }

  render() {
    return (
      <input type={this.props.type} value={this.props.value} onChange={this.onChange} className={this.sc('', this.props.size)} placeholder={this.props.placeholder} disabled={this.props.disabled}/>
      )
  }
}

export default Input;