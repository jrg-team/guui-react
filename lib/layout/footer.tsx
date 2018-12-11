import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import {CSSProperties} from 'react';

const componentName = 'Footer';
const sc = createScopedClasses(componentName);

interface IProps {
  className?: ClassValue;
  style?: CSSProperties
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
