import * as PropTypes from 'prop-types';
import * as React from 'react';

interface IProps {
  icon?: string;
  badge?: number;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onTouch?: React.TouchEventHandler<HTMLButtonElement>;
}

interface IState {
  x: string
}

class Button extends React.Component<IProps, IState> {
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
  static propTypes = {
    icon: PropTypes.string,
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
