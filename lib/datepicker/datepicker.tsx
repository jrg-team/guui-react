import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';
import Popover from '../popover/popover';
import {PureComponent} from 'react';
import ClickOutside from '../clickOutside/clickOutside';
import Icon from '../icon/icon';
import './datepicker.scss';
import Date2, {pad} from 'utils/date';
import PropTypes from 'prop-types';
import {range} from 'utils/collection';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);
const WeekdayNames = ['日', '一', '二', '三', '四', '五', '六'];
const normalize = (n: number, base: number): number => {
  if (n < 0) {
    return normalize(n + base, base);
  } else {
    return n;
  }
};

export interface IProps extends IStyledProps {
  value?: Date | string;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?: (date: Date) => void;
}

interface IState {
  open: boolean;
  display: [number, number];
}

class Datepicker extends PureComponent<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {
    firstDayOfWeek: 1
  };
  static propTypes = {
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf<Date>(Date)])
  };
  private readonly refDiv: React.RefObject<HTMLDivElement>;
  constructor(props: IProps) {
    super(props);
    const [year, month] = this.date2Value.parts;
    this.state = {
      open: false,
      display: [year, month],
    };
    this.refDiv = React.createRef<HTMLDivElement>();
  }
  get weekdayNames() {
    const before = WeekdayNames.slice(0, this.props.firstDayOfWeek);
    const after = WeekdayNames.slice(this.props.firstDayOfWeek);
    return [...after, ...before];
  }
  get date2Value() {
    return new Date2(this.props.value);
  }
  get formattedValue() {
    return this.date2Value.toDateString();
  }
  onClickDay = (day: Date2) => {
    this.props.onChange && this.props.onChange.call(null, day.toDate());
  };
  onFocusInput = () => {
    this.setState((prevState, props) => {
      return {open: true};
    });
  };
  onClickOutside = () => {
    this.setState((prevState, props) => {
      return {open: false};
    });
  };

  renderDays() {
    const {display} = this.state;
    const date2 = new Date2(display[0], display[1], 1);
    const n = date2.dayOfWeek;
    const delta = normalize(n - this.props.firstDayOfWeek!, 7);
    const first = date2.clone.addDay(-delta);
    const days2 = range(0, 5).map(row => (
      <div key={first.clone.addDay(row * 7).timestamp}>
        {range(0, 6).map(col => {
          const d = first.clone.addDay(row * 7 + col);
          return (
            <span
              className={sc('cell', 'day', {
                'day-currentMonth': d.month === display[1],
                'day-selected': d.isSameDayAs(this.date2Value)
              })}
              onClick={e => this.onClickDay(d)}
              key={d.timestamp}>{d.day}</span>
          );
        })}
      </div>
    ));
    return (
      <div className={sc('days')}>
        {days2}
      </div>
    );
  }
  renderPicker() {
    return (
      <div className={sc('picker', `picker-${this.props.firstDayOfWeek}`)}>
        <div className={sc('weekdays')}>
          {this.weekdayNames.map((name, i) =>
            <span className={sc('cell', 'dayOfWeek')} key={i}>{name}</span>)}
        </div>
        {this.renderDays()}
      </div>
    );
  }
  renderNav() {
    return (
      <div className={sc('nav')}>
      <span className={sc('cell')}>
        <Icon name="double-left"/>
      </span>
        <span className={sc('cell')}>
        <Icon name="left"/>
      </span>
        <span className={sc('yearAndMonth', 'cell', 'cell-span3')}>
        {this.state.display[0]}年 {pad(this.state.display[1])}月
        </span>
        <span className={sc('cell')}>
        <Icon name="right"/>
      </span>
        <span className={sc('cell')}>
        <Icon name="double-right"/>
      </span>
      </div>
    );
  }
  renderActions() {
    return <div className={sc('actions')}></div>;
  }
  renderDatepicker() {
    return (
      <div ref={this.refDiv} className={sc()}>
        {this.renderNav()}
        {this.renderPicker()}
        {this.renderActions()}
      </div>
    );
  }

  render() {
    return (
      <ClickOutside handler={this.onClickOutside} exclude={this.refDiv}>
        <Popover content={this.renderDatepicker()} trigger="manual" open={this.state.open} position="bottomLeft">
          <Input onFocus={this.onFocusInput} value={this.formattedValue} readOnly={true}/>
        </Popover>
      </ClickOutside>
    );
  }
}

export default Datepicker;
