import * as PropTypes from 'prop-types';
import * as React from 'react';

import Component from './component'
import {Button, IProps as ButtonProps} from './button'

interface IProps {
  title?: string;
  visible: boolean;
  closable?: boolean;
  footer?: string | React.ReactNode;
  okText?: string;
  okButtonProps?: ButtonProps;
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  width?: string|number;
  children: React.ReactElement<any>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLSpanElement>;
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IState {
  x: string
}

class Dialog extends Component<IProps, IState> {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
    closable: PropTypes.bool,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    okButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    visible: PropTypes.bool
  }

  public static defaultProps: Partial<IProps> = {
    width: 500,
    okText: '确定',
    cancelText: '取消',
    closable: true
  };

  constructor(props: IProps) {
    super(props)
  }

  onCancel = (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => {
    this.props.onCancel && this.props.onCancel(e)
  }

  onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onConfirm && this.props.onConfirm(e)
  }

  render() {
    const {children, title, closable, footer} = this.props

    console.log(footer);
    const renderTitle = () => {
      let titleHtml
      if (title) {
        titleHtml = <span className={this.sc('title')}>{title}</span>
      }
      return titleHtml
    }

    const renderFooter = () => {
      if (footer === null) {
        return ''
      } else if (footer === undefined) {
        return (
          <div className={this.sc('footer')}>
            <Button {...this.props.cancelButtonProps} onClick={this.onCancel}>{this.props.cancelText}</Button>
            <Button {...this.props.okButtonProps} onClick={this.onConfirm}>{this.props.okText}</Button>
          </div>
        )
      } else {
        return (footer)
      }
    }
    if (this.props.visible) {
      return (
        <div className={this.sc()}>
          <header>
            {renderTitle()}
            {closable ? <span className={this.sc('close')} onClick={this.onCancel}>x</span> : ''}
          </header>
          <div className="content">
            {children}
          </div>
          {renderFooter()}
        </div>
      );
    } else {
      return ''
    }
  }
}

export default Dialog;
