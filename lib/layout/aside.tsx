import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import {CSSProperties} from 'react';

const componentName = 'Aside';
const sc = createScopedClasses(componentName);

interface IProps {
  className?: ClassValue;
  style?: CSSProperties
};

const Aside: GFC<IProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Aside.displayName = componentName;
export default Aside;
