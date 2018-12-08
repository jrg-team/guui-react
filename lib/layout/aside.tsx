import * as React from 'react';
import {classes, createScopedClasses} from 'lib/shared/classes';

const componentName = 'Aside';
const sc = createScopedClasses(componentName);

interface IAsideProps {
  className?: string
};

const Aside: GFC<IAsideProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)}>
      {props.children}
    </div>
  );
};
Aside.displayName = componentName;
export default Aside;
