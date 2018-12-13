import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {scopedClasses} from './component'
import Icon from './icon/icon'

interface IProps {
  type: 'info' | 'success' | 'error' | 'warn';
  title: string;
  showIcon?: boolean;
  iconType: string;
  closable?: boolean;
  closeText?: string;
  description?: string;
}

export type ToastFunc = (props: IProps) => {
  destroy: () => void,
  update: (newConfig: IProps) => void,
};

const Alter = (props: IProps) => {
  const type = props.type
  const title = props.title
  const showIcon = props.showIcon
  const iconType = props.iconType || 'info'
  const closable = props.closable || false
  const closeText = props.closeText
  const description = props.description

  function renderIcon() {
    if (showIcon) {
      return (
        <div className="icon-wrapper">
          <Icon name={iconType}></Icon>
        </div>
      )
    } else {
      return ''
    }
  }

  function renderCloseIcon() {
    if (closable) {
      return (
        <div className="close-wrapper">
          {closeText || <Icon name="close"></Icon>}
        </div>
      )
    } else {
      return ''
    }
  }

  return (
    <div className={scopedClasses.call(Toast, type)}>
      {renderIcon()}
      <div className="content">
        <p className="title">{title}</p>
        {description ? <p className="description">{description}</p> : ''}
      </div>
      {renderCloseIcon()}
    </div>
  )
}

const appendAlert = (config: IProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let currentConfig = {...config}

  function render(props: IProps) {
    ReactDOM.render(<Alter {...props} />, div);
  }

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function update(newConfig: IProps){
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    render(currentConfig);
  }

  render(currentConfig)

  return {
    destroy,
    update,
  }
}

class Toast {
  static info: ToastFunc;
  static success: ToastFunc;
  static error: ToastFunc;
  static warn: ToastFunc;
  static warning: ToastFunc;

  constructor() {}
}

Toast.info = (props: IProps) => {
  const config = {
    type: 'info',
    ...props,
  };
  return appendAlert(config)
}

Toast.success = (props: IProps) => {
  const config = {
    type: 'success',
    ...props,
  };
  return appendAlert(config)
}

Toast.error = (props: IProps) => {
  const config = {
    type: 'error',
    ...props,
  };
  return appendAlert(config)
}

Toast.warn = Toast.warning = (props: IProps) => {
  const config = {
    type: 'warn',
    ...props,
  };
  return appendAlert(config)
}

export default Toast;
