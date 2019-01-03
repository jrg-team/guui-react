import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';
import Popover from '../popover/popover';
import {useRef, useState} from 'react';
import ClickOutside from '../clickOutside/clickOutside';
import Icon from '../icon/icon';
import './datepicker.scss';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
}

const Datepicker: GFC<IProps> = (props) => {
  const div = useRef(null);
  const onFocusInput = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const picker = (
    <div ref={div} className={sc()}>
      <div className={sc('nav')}>
        <Icon name="double-left"/>
        <Icon name="left"/>
        <span className={sc('yearAndMonth')}>
          2018年 01月
        </span>
        <Icon name="right"/>
        <Icon name="double-right"/>
      </div>
      <div className={sc('picker')}></div>
      <div className={sc('actions')}></div>
    </div>
  );
  return (
    <ClickOutside handler={() => setOpen(false)} exclude={div}>
      <Popover content={picker} trigger="manual" open={open} position="bottomLeft">
        <Input onFocus={onFocusInput}/>
      </Popover>
    </ClickOutside>
  );
};
Datepicker.displayName = componentName;
Datepicker.defaultProps = {};
Datepicker.propTypes = {};
export default Datepicker;
