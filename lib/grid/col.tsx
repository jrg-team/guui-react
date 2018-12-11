import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import {CSSProperties} from 'react';
// import * as PropTypes from 'prop-types';

const componentName = 'Col';
const sc = createScopedClasses(componentName);

interface IProps {
  className?: ClassValue;
  style?: CSSProperties;
  span?: number;
  offset?: number;
  gutter?: number;
};

const Col: GFC<IProps> = (props) => {
  const spanClass = props.span ? `span${props.span}` : undefined;
  const offsetClass = props.offset ? `offset${props.offset}` : undefined;
  const padding = props.gutter ? `0 ${props.gutter / 2}px` : undefined;
  return (
    <div className={classes(sc('', spanClass, offsetClass))} style={{padding}}>
      <div className={classes(props.className)} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};
Col.displayName = componentName;
Col.defaultProps = {
  span: 1,
  offset: 0,
  gutter: 0,
};
Col.propTypes = {};
export default Col;
