import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import MenuItemBase, {IMenuItemBaseProps} from './menuItemBase';

const componentName = 'MenuDir';
const sc = createScopedClasses(componentName);

export interface IProps extends IMenuItemBaseProps {
  title: string;
}

export interface IState {
}

class MenuDir extends MenuItemBase<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className={sc()}>
        <div className={sc('title')}>{this.props.title}</div>
        <div className={sc('children')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MenuDir;
