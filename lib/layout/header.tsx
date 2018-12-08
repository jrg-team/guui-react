import * as React from 'react';
import {createScopedClasses, classes} from 'lib/shared/classes';

const componentName = 'Header';
const sc = createScopedClasses(componentName);

interface IHeaderProps {
  className?: string
};

const Header: GFC<IHeaderProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)}>
      {props.children}
    </div>
  );
};
Header.displayName = componentName;
export default Header;
