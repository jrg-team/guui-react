import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';

const componentName = 'Main';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
};

const Main: GFC<IProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Main.displayName = componentName;
export default Main;
