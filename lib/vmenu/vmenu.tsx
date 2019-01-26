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
  initFolding?: 'unfoldAll' | 'foldAll';
  unfoldLimit?: 1;
  children: JSX.Element[];
}

export interface IState {
  selected?: string;
  unfolded?: string[];
}

class Vmenu extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {
    unfolded: [],
    defaultFolding: 'foldAll',
  };
  static propTypes = {
    selected: PropTypes.string,
    unfolded: PropTypes.arrayOf(PropTypes.string),
    defaultFolding: PropTypes.oneOf(['unfoldAll', 'foldAll']),
    onSelect: PropTypes.func,
    children: menuChildrenValidator,
  };
  static Item = MenuItem;
  static Dir = MenuDir;

  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: 'defaultSelected' in props ? this.props.defaultSelected : undefined,
      unfolded: this.props.defaultUnfolded
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
    if (!this.props.children) {
      return this.props.children;
    } else if (!('map' in (this.props.children as any))) {
      return this.props.children;
    } else {
      const children = this.props.children as any[];
      return children.map(a => a);
    }
  }

  render() {

    return (
      <div className={sc()}>
        <MenuContext.Provider value={{
          selected: this.selected,
          setSelected: this.onSelect,
        }}>
          {this.children}
        </MenuContext.Provider>
      </div>
    );
  }
}

export default Vmenu;
