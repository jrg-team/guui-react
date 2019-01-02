import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';
import ClickOutside from '../clickOutside/clickOutside';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
};

const Datepicker: GFC<IProps> = (props) => {
  const onClickOutside = () => {
    console.log('o');
  };
  const onFocusInput = () => {}
  return (
    <ClickOutside className={sc()} handler={onClickOutside}>
      <Input onFocus={onFocusInput}/>
    </ClickOutside>
  );
};
Datepicker.displayName = componentName;
Datepicker.defaultProps = {};
Datepicker.propTypes = {};
export default Datepicker;
