import * as React from 'react';
import {createScopedClasses, classes} from 'utils/classes';
import {CSSProperties} from 'react';

const componentName = 'Header';
const sc = createScopedClasses(componentName);

interface IHeaderProps {
  className?: string;
  style?: CSSProperties;
};

const Header: GFC<IHeaderProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Header.displayName = componentName;
export default Header;
