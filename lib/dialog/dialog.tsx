import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import './dialog.scss';
import ReactDOM from 'react-dom';
import {Button, Icon} from '../index';
import {ReactElement, ReactFragment, ReactNode, Fragment} from 'react';

const componentName = 'Dialog';
const sc = createScopedClasses(componentName);

interface IProps {
  visible: boolean;
  mask?: {
    visible?: boolean;
    closeOnClick?: boolean;
  };
  onClose: React.MouseEventHandler;
  buttons?: ReactFragment | ReactElement;
}

class Dialog extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  onClose: React.MouseEventHandler = (e) => {
    this.props.onClose(e);
  };

  render() {
    return this.props.visible ?
      ReactDOM.createPortal(
        <div className={sc('wrapper')}>
          {this.props.mask && this.props.mask.visible &&
          <div className={sc('mask')}
               onClick={this.props.mask.closeOnClick ? this.onClose : undefined}>
          </div>}
          <div className={sc('')}>
            <Icon className={sc('close')} onClick={this.onClose} name="close"/>
            <header className={sc('header')}>
              提示
            </header>
            <main className={sc('main')}>
              {this.props.children}
            </main>
            {this.props.buttons &&
            <footer className={sc('footer')}>
              {this.props.buttons}
            </footer>
            }
          </div>
        </div>
        ,
        document.body
      ) :
      null;
  }
}

const createModal = (content: ReactNode, buttons?: ReactFragment | ReactElement) => {
  const render = (props: IProps, children: ReactNode) => {
    ReactDOM.render(React.createElement(Dialog, props, children), container);
  };
  const onClose = () => {
    render({...props, visible: false}, content);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    return true;
  };
  const props = {
    visible: true,
    onClose,
    buttons,
  };
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(props, content);
  return onClose;
};

export const alert = (content: ReactNode, callback: () => void) => {
  const close = createModal(content,
    <Button level="important" onClick={() => close() && callback && callback()}>确定</Button>);
};

export const confirm = (content: ReactNode, yes: () => void, no?: () => void) => {
  const close = createModal(content,
    <Fragment>
      <Button onClick={() => close() && no && no()}>取消</Button>
      <Button level="important" onClick={() => close() && yes && yes()}>确定</Button>
    </Fragment>
  );
};

export const modal = (content: ReactNode) => {
  return createModal(content);
};

export default Dialog;
