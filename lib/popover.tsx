import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Popover';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
};

const Popover: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>TO DO</div>
  );
};
Popover.displayName = componentName;
Popover.defaultProps = {};
Popover.propTypes = {};
export default Popover;
