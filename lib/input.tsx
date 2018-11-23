import * as PropTypes from 'prop-types';
import * as React from 'react';
import './input.sass'
import Component from './component'

interface IProps {
  size?: 'small' | 'default' | 'large';
  value?: string,
  type?: 'text' | 'textarea'
  label: string,
  labelPosition: 'top' | 'left',
  error?: string,
  errorPosition?: 'left' | 'bottom',
  placeholder?: string,
  disabled?: boolean,
  prefix?: string,
  postfix?: string,
  onInput?: React.EventHandler<React.SyntheticEvent<HTMLInputElement>>,
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

interface IState {
  x: string
}

class Input extends Component<IProps, IState> {
  static propTypes = {
    value: PropTypes.string
  }

  public static defaultProps: Partial<IProps> = {
    size: 'default',
    type: 'text',
    disabled: false,
    errorPosition: 'bottom'
  };

  constructor(props: IProps) {
    super(props)
  }

  onChange: React.EventHandler<React.SyntheticEvent<HTMLInputElement>> = (e) => {
    this.props.onInput && this.props.onInput(e);
  }

  onPressEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    console.log(1);
    this.props.onPressEnter && this.props.onPressEnter(e)
  }

  render() {
    return (
      <input type={this.props.type} value={this.props.value} onChange={this.onChange}
        className={this.sc('', this.props.size)} placeholder={this.props.placeholder}
        disabled={this.props.disabled}/>
      )
  }
}

export default Input;