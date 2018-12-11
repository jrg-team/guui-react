import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import * as PropTypes from 'prop-types';
import {CSSProperties} from 'react';

const componentName = 'Layout';
const sc = createScopedClasses(componentName);

interface IProps {
  dir?: 'horizontal' | 'vertical';
  className?: ClassValue;
  style?: CSSProperties;
};

const Layout: GFC<IProps> = (props) => {
  return (
    <div className={classes(sc('', props.dir), props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
Layout.displayName = componentName;
Layout.defaultProps = {
  dir: 'vertical'
};
Layout.propTypes = {
  dir: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
};
export default Layout;
