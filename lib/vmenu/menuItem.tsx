import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import MenuItemBase, {IMenuItemBaseProps} from './menuItemBase';

const componentName = 'MenuItem';
const sc = createScopedClasses(componentName);

interface IProps extends IMenuItemBaseProps {
}

interface IState {
}

class MenuItem extends MenuItemBase<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className={sc('', this.classes)} onClick={() => this.context.setSelected(this.props.id)}>
        {this.props.children}
      </div>
    );
  }
}

export default MenuItem;
