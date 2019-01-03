import * as React from 'react';
import {classes, createScopedClasses} from 'utils/classes';
import {ReactElement} from 'react';
import * as PropTypes from 'prop-types';
import Col from './col';
import {upperFirstLetter} from 'utils/namer';

const componentName = 'Row';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
  gutter?: number;
  align?: 'left' | 'right' | 'center' | 'spaceBetween' | 'spaceAround';
  verticalAlign?: 'top' | 'bottom' | 'center';
}

const Row: GFC<IProps> = (props) => {
  const margin = props.gutter ? `0 -${props.gutter / 2}px` : undefined;
  const alignClass = props.align && `align${upperFirstLetter(props.align)}`;
  const verticalAlignClass = props.verticalAlign && props.verticalAlign !== 'top' && `verticalAlign${upperFirstLetter(props.verticalAlign)}`;
  const children = React.Children.map(props.children, (child, index) => {
    const element = child as ReactElement<any>;
    return element.type === Col && React.cloneElement(element, {
      gutter: props.gutter,
    });
  });
  const cols = children && children.filter(i => i);
  return (
    <div className={classes(sc('', alignClass, verticalAlignClass), props.className)} style={{margin, ...props.style}}>
      {cols}
    </div>
  );
};
Row.displayName = componentName;
Row.defaultProps = {
  gutter: 0,
  align: 'left',
  verticalAlign: 'top',
};
Row.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center', 'spaceBetween', 'spaceAround']).isRequired,
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center']).isRequired,
};
export default Row;
