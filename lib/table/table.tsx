import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Table';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
}

const Table: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>TO DO</div>
  );
};
Table.displayName = componentName;
Table.defaultProps = {};
Table.propTypes = {};
export default Table;
