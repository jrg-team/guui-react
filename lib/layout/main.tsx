import * as React from 'react';
import {classes, createScopedClasses} from 'lib/shared/classes';

const componentName = 'Main';
const sc = createScopedClasses(componentName);

interface IMainProps {
  className?: string
};

const Main: GFC<IMainProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)}>
      {props.children}
    </div>
  );
};
Main.displayName = componentName;
export default Main;
