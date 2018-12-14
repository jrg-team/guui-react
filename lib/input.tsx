import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Input';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
};

const Input: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>TO DO</div>
  );
};
Input.displayName = componentName;
Input.defaultProps = {};
Input.propTypes = {};
export default Input;
