import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import MenuItemBase, {IMenuItemBaseProps} from './menuItemBase';
import {includes} from 'utils/collection';

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

  get folded() {
    if (includes(this.context.folded, this.props.id)) {
      return true;
    } else if (includes(this.context.unfolded, this.props.id)) {
      return false;
    } else {
      return this.context.initFolding === 'foldAll';
    }
  }

  get unfolded() {
    if (includes(this.context.unfolded, this.props.id)) {
      return true;
    } else if (includes(this.context.folded, this.props.id)) {
      return false;
    } else {
      return this.context.initFolding === 'unfoldAll';
    }
  }

  toggle = () => {
    if (this.folded) {
      this.context.unfold(this.props.id);
    } else {
      this.context.fold(this.props.id);
    }
  };

  render() {
    return (
      <div className={sc('', this.classes)}>
        <div className={sc('title')} onClick={this.toggle}>
          <span className={sc('title-content')}>{this.props.title}</span>
          <span className={sc('title-indicator', {'title-indicator-unfolded': this.unfolded})}></span>
        </div>
        {
          this.unfolded &&
          <div className={sc('children')}>
            {this.children}
          </div>
        }
      </div>
    );
  }
}

export default MenuDir;
