import * as React from 'react';
import {MenuContext} from './menuContext';

export interface IMenuItemBaseProps extends IStyledProps {
  id: string;
  innerLevel?: number;
}

export interface IMenuItemBaseState {
}

class MenuItemBase<P extends IMenuItemBaseProps, S extends IMenuItemBaseState> extends React.Component<P, S> {
  static contextType = MenuContext;
  context!: React.ContextType<typeof MenuContext>;

  get classes() {
    return {
      selected: this.props.id === this.context.selected
    };
  }
}

export default MenuItemBase;
