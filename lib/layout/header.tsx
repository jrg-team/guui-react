import * as React from 'react';
import {createScopedClasses, classes} from 'utils/classes';

const componentName = 'Header';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
};

const Header: GFC<IProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Header.displayName = componentName;
export default Header;
