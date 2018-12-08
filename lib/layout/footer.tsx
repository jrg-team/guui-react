import * as React from 'react';
import {classes, createScopedClasses} from 'lib/shared/classes';

const componentName = 'Footer';
const sc = createScopedClasses(componentName);

interface IFooterProps {
  className?: string
};

const Footer: GFC<IFooterProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)}>
      {props.children}
    </div>
  );
};
Footer.displayName = componentName;
export default Footer;
