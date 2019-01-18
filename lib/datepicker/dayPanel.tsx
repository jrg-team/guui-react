import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Date2, {IReadonlyDate, pad} from 'utils/date';
import Icon from '../icon/icon';
import {Fragment} from 'react';
import {range} from 'utils/collection';
import PropTypes from 'prop-types';

const componentName = 'dayPanel';
const sc = createScopedClasses('datepicker');
const normalize = (n: number, base: number): number => {
  if (n < 0) {
    return normalize(n + base, base);
  } else {
    return n;
  }
};

interface IProps extends IStyledProps {
  value?: Date | string;
  display: IReadonlyDate;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?: (date: Date) => void;
}

const WeekdayNames = ['日', '一', '二', '三', '四', '五', '六'];

class DayPanel extends React.PureComponent<IProps> {
  static displayName = componentName;
  static defaultProps = {
    firstDayOfWeek: 1,
  };
  static propTypes = {
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf<Date>(Date)])
  };

  onClickPrevYear = () => {
    this.setState({display: this.props.display.clone.addYear(-1)});
  };
  onClickPrevMonth = () => {
    this.setState({display: this.props.display.clone.addMonth(-1)});
  };
  onClickNextMonth = () => {
    this.setState({display: this.props.display.clone.addMonth(1)});
  };
  onClickNextYear = () => {
    this.setState({display: this.props.display.clone.addYear(1)});
  };
  onClickYear = () => {
    this.setState({panel: 'year'});
  };
  onClickMonth = () => {
    this.setState({panel: 'month'});
  };

  get date2Value() {
    return new Date2(this.props.value);
  }

  renderNav({hasArrow = true}) {
    return (
      <div className={sc('nav', 'span7')}>
        {hasArrow &&
        <Fragment>
          <span className={sc('cell')} onClick={this.onClickPrevYear}>
            <Icon name="double-left"/>
          </span>
          <span className={sc('cell')} onClick={this.onClickPrevMonth}>
            <Icon name="left"/>
          </span>
        </Fragment>
        }
        <span className={sc('yearAndMonth', 'cell', 'span3')}>
          <span className={sc('year')} onClick={this.onClickYear}>
            {this.props.display.year}年
          </span>
          <span className={sc('month')} onClick={this.onClickMonth}>
            {pad(this.props.display.month)}月
          </span>
        </span>
        {
          hasArrow &&
          <Fragment>
            <span className={sc('cell')} onClick={this.onClickNextMonth}>
              <Icon name="right"/>
            </span>
            <span className={sc('cell')} onClick={this.onClickNextYear}>
              <Icon name="double-right"/>
            </span>
          </Fragment>
        }
      </div>
    );
  }

  renderActions() {
    return <div className={sc('actions')}></div>;
  }

  get weekdayNames() {
    const before = WeekdayNames.slice(0, this.props.firstDayOfWeek);
    const after = WeekdayNames.slice(this.props.firstDayOfWeek);
    return [...after, ...before];
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

  renderDays() {
    const {display} = this.props;
    const firstDayOfThisMonth = display.clone.setDay(1);
    const n = firstDayOfThisMonth.dayOfWeek;
    const delta = normalize(n - this.props.firstDayOfWeek!, 7);
    const firstDayOfThisPanel = firstDayOfThisMonth.addDay(-delta);
    const days = range(0, 5).map(row => (
      <div key={firstDayOfThisPanel.clone.addDay(row * 7).timestamp}>
        {range(0, 6).map(col => {
          const d = firstDayOfThisPanel.clone.addDay(row * 7 + col);
          return (
            <span
              className={sc('cell', 'day', {
                'day-currentMonth': d.month === display.month,
                'day-selected': d.isSameDayAs(this.date2Value)
              })}
              onClick={() => this.onClickDay(d)}
              key={d.timestamp}>{d.day}</span>
          );
        })}
      </div>
    ));
    return (
      <div className={sc('days')}>
        {days}
      </div>
    );
  }

  onClickDay = (day: Date2) => {
    this.props.onChange && this.props.onChange.call(null, day.toDate());
  };

  render() {
    return (
      <div className={sc()}>
        {this.renderNav({hasArrow: true})}
        {this.renderPicker()}
        {this.renderActions()}
      </div>
    );
  }

}

export default DayPanel;
