import * as React from 'react';
import {MenuContext} from './menuContext';
import {ReactElement} from 'react';

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
      if (typeof child.type !== 'string' &&
        (child.type as React.FunctionComponent).displayName === 'MenuItem' ||
        (child.type as React.FunctionComponent).displayName === 'MenuDir'
      ) {
        return React.cloneElement(child, {innerLevel: this.props.innerLevel! + 1, key: child.props.id});
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
