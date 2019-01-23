import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Vmenu';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
}

const Vmenu: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>TO DO</div>
  );
};
Vmenu.displayName = componentName;
Vmenu.defaultProps = {};
Vmenu.propTypes = {};
export default Vmenu;
