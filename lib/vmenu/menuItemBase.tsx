import * as React from 'react';
import {MenuContext} from './menuContext';
import {ReactElement} from 'react';
import MenuDir from './menuDir';
import MenuItem from './menuItem';

export interface IMenuItemBaseProps extends IStyledProps {
  id: string;
  innerLevel?: number;
}

export interface IMenuItemBaseState {
}

class MenuItemBase<P extends IMenuItemBaseProps, S extends IMenuItemBaseState> extends React.Component<P, S> {
  static contextType = MenuContext;
  context!: React.ContextType<typeof MenuContext>;

  get children() {
    const children = this.props.children as Array<ReactElement<any>>;
    if (!children.map) { return children; }
    return children.map(child => {
      if (typeof child.type !== 'string' && (child.type === MenuDir || child.type === MenuItem)) {
        return {...child, props: {...child.props, innerLevel: this.props.innerLevel! + 1}};
      } else {
        return child;
      }
    });
  }

  get classes() {
    return {
      selected: this.props.id === this.context.selected,
      [`level${this.props.innerLevel}`]: true
    };
  }
}

export default MenuItemBase;
