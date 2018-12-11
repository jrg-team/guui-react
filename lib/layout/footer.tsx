import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';

const componentName = 'Footer';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
};

const Footer: GFC<IProps> = (props) => {
  return (
    <div className={classes(sc(), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Footer.displayName = componentName;
export default Footer;
