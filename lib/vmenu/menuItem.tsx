import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import MenuItemBase, {IMenuItemBaseProps} from './menuItemBase';

const componentName = 'MenuItem';
const sc = createScopedClasses(componentName);

interface IProps extends IMenuItemBaseProps {
  href?: string;
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

  onClick = () => {
    this.context.setSelected(this.props.id);
  };

  render() {
    return (
      this.props.href ?
        (
          <a className={sc('', this.classes)} onClick={this.onClick}
             href={this.props.href}>
            {this.children}
          </a>
        ) :
        (
          <div className={sc('', this.classes)} onClick={this.onClick}>
            {this.children}
          </div>
        )
    );
  }
}

export default MenuItem;
