import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import MenuItem from './menuItem';
import MenuDir from './menuDir';
import './vmenu.scss';
import {MenuContext} from './menuContext';
import PropTypes from 'prop-types';
import menuChildrenValidator from './menuChildrenValidator';

const componentName = 'Vmenu';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  selected?: string;
  onSelect?: (selected: string | undefined) => void;
  defaultSelected?: string;
  defaultUnfolded?: string[];
  defaultFolded?: string[];
  initFolding?: 'unfoldAll' | 'foldAll';
  unfoldLimit?: 1;
}

export interface IState {
  selected?: string;
  unfolded: string[];
  folded: string[];
}

class Vmenu extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {
    unfolded: [],
    initFolding: 'foldAll',
  };
  static propTypes = {
    selected: PropTypes.string,
    unfolded: PropTypes.arrayOf(PropTypes.string),
    folded: PropTypes.arrayOf(PropTypes.string),
    initFolding: PropTypes.oneOf(['unfoldAll', 'foldAll']),
    onSelect: PropTypes.func,
    children: menuChildrenValidator,
  };
  static Item = MenuItem;
  static Dir = MenuDir;

  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: 'defaultSelected' in props ? this.props.defaultSelected : undefined,
      unfolded: this.props.defaultUnfolded || [],
      folded: this.props.defaultFolded || []
    };
  }

  onSelect = (selected: string) => {
    this.selected = selected;
  };

  get selected() {
    return 'defaultSelected' in this.props ? this.state.selected : this.props.selected;
  }

  set selected(value: string | undefined) {
    if ('defaultSelected' in this.props) {
      this.setState({selected: value});
    } else {
      this.props.onSelect &&
      this.props.onSelect(value);
    }
  }

  get children() {
    const children = this.props.children as any[];
    if (!children.map) { return children; }
    return children.map(child => {
      if (child.type.displayName === 'MenuDir' || child.type.displayName === 'MenuItem') {
        return {...child, props: {...child.props, innerLevel: 1}};
      } else {
        return child;
      }
    });
  }

  onUnfold = (id: string) => {
    this.setState({
      folded: this.removeFolded(id),
      unfolded: this.addUnfolded(id)
    });
  };
  onFold = (id: string) => {
    console.log('id');
    console.log(id);
    this.setState({
      folded: this.addFolded(id),
      unfolded: this.removeUnfolded(id)
    });
  };

  addFolded(id: string) {
    console.log(this.state.folded.concat([id]));
    return this.state.folded.concat([id]);
  }

  addUnfolded(id: string) {
    console.log(this.state.unfolded.concat([id]));
    return this.state.unfolded.concat([id]);
  }

  removeFolded(id: string) {
    const index = this.state.folded.indexOf(id);
    if (index >= 0) {
      return [
        ...this.state.folded.slice(0, index),
        ...this.state.folded.slice(index + 1)
      ];
    } else {
      return this.state.folded;
    }
  }

  removeUnfolded(id: string) {
    const index = this.state.unfolded.indexOf(id);
    if (index >= 0) {
      return [
        ...this.state.unfolded.slice(0, index),
        ...this.state.unfolded.slice(index + 1)
      ];
    } else {
      return this.state.unfolded;
    }
  }

  render() {

    return (
      <div className={sc()} style={this.props.style}>
        <MenuContext.Provider value={{
          selected: this.selected,
          setSelected: this.onSelect,
          initFolding: this.props.initFolding,
          unfolded: this.state.unfolded,
          folded: this.state.folded,
          unfold: this.onUnfold,
          fold: this.onFold,
        }}>
          {this.children}
        </MenuContext.Provider>
      </div>
    );
  }
}

export default Vmenu;
