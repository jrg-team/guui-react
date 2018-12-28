import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
};

const Datepicker: GFC<IProps> = (props) => {
  return (
    <div className={sc()}>
      <Input/>
    </div>
  );
};
Datepicker.displayName = componentName;
Datepicker.defaultProps = {};
Datepicker.propTypes = {};
export default Datepicker;
