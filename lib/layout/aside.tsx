import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import {CSSProperties} from 'react';

const componentName = 'Aside';
const sc = createScopedClasses(componentName);

interface IAsideProps {
  className?: string;
  style?: CSSProperties
};

const Aside: GFC<IAsideProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Aside.displayName = componentName;
export default Aside;
