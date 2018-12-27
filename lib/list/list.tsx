import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'List';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
};

const List: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>TO DO</div>
  );
};
List.displayName = componentName;
List.defaultProps = {};
List.propTypes = {};
export default List;
