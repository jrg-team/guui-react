import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';
import Popover from '../popover/popover';
import {useRef, useState} from 'react';
import ClickOutside from '../clickOutside/clickOutside';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
};

const Datepicker: GFC<IProps> = (props) => {
  const div = useRef(null);
  const onFocusInput = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const content = (
    <div ref={div} className={sc('pop')}>hi</div>
  );
  return (
    <ClickOutside handler={() => setOpen(false)} exclude={div}>
      <Popover content={content} trigger="manual" open={open} position="bottomLeft">
        <Input onFocus={onFocusInput}/>
      </Popover>
    </ClickOutside>
  );
};
Datepicker.displayName = componentName;
Datepicker.defaultProps = {};
Datepicker.propTypes = {};
export default Datepicker;
