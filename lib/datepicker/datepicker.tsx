import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';
import Popover from '../popover/popover';
import {useRef, useState} from 'react';
import ClickOutside from '../clickOutside/clickOutside';
import Icon from '../icon/icon';
import './datepicker.scss';
import Date2 from 'utils/date';
import PropTypes from 'prop-types';
import {range} from 'utils/collection';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  value?: Date | string;
  firstDayOfWeek?: 0 | 1;
}

const Datepicker: GFC<IProps> = (props) => {
  const {value} = props;
  const date2Value = new Date2(value);
  const formattedValue = date2Value.toDateString();
  const div = useRef(null);
  const onFocusInput = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState<boolean>(false);
  const [year, month] = date2Value.parts;
  const [display] = useState<[number, number]>([year, month]);
  const Nav = () => (
    <div className={sc('nav')}>
      <span className={sc('cell')}>
        <Icon name="double-left"/>
      </span>
      <span className={sc('cell')}>
        <Icon name="left"/>
      </span>
      <span className={sc('yearAndMonth', 'cell', 'cell-span3')}>
        {display[0]}年 {display[1]}月
        </span>
      <span className={sc('cell')}>
        <Icon name="right"/>
      </span>
      <span className={sc('cell')}>
        <Icon name="double-right"/>
      </span>
    </div>
  );
  const normalize = (n: number, base: number): number => {
    if (n < 0) {
      return normalize(n + base, base);
    } else {
      return n;
    }
  };
  const weekdayNames = ['日', '一', '二', '三', '四', '五', '六'];
  const Days = () => {
    const date2 = new Date2(display[0], display[1], 1);
    const n = date2.dayOfWeek;
    const delta = normalize(n - props.firstDayOfWeek!, 7);
    const first = date2.clone.addDay(-delta);
    const days2 = range(0, 5).map(row => (
      <div key={first.clone.addDay(row * 7).timestamp}>
        {range(0, 6).map(col => {
          const d = first.clone.addDay(row * 7 + col);
          return <span className={sc('cell')} key={d.timestamp}>{d.day}</span>;
        })}
      </div>
    ));
    return (
      <div className={sc('days')}>
        {days2}
      </div>
    );
  };
  const Picker = () => (
    <div className={sc('picker')}>
      <div className={sc('weekdays')}>
        {weekdayNames.map((name, i) => <span className={sc('cell')} key={i}>{name}</span>)}
      </div>
      <Days/>
    </div>
  );
  const Actions = () => (
    <div className={sc('actions')}></div>
  );
  const datepicker = (
    <div ref={div} className={sc()}>
      <Nav/>
      <Picker/>
      <Actions/>
    </div>
  );
  return (
    <ClickOutside handler={() => (console.log('hi'), setOpen(false))} exclude={div}>
      <Popover content={datepicker} trigger="manual" open={open} position="bottomLeft">
        <Input onFocus={onFocusInput} value={formattedValue} readOnly={true}/>
      </Popover>
    </ClickOutside>
  );
};
Datepicker.displayName = componentName;
Datepicker.defaultProps = {
  firstDayOfWeek: 1
};
Datepicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf<Date>(Date)])
};
export default Datepicker;
