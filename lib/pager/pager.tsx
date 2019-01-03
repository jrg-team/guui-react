import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Pager';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
}

const Pager: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>TO DO</div>
  );
};
Pager.displayName = componentName;
Pager.defaultProps = {};
Pager.propTypes = {};
export default Pager;
