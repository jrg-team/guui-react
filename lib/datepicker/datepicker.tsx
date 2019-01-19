import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import Input from '../input/input';
import Popover from '../popover/popover';
import {PureComponent} from 'react';
import ClickOutside from '../clickOutside/clickOutside';
import './datepicker.scss';
import Date2, {IReadonlyDate} from 'utils/date';
import PropTypes from 'prop-types';
import DayPanel from './dayPanel';

const componentName = 'Datepicker';
const sc = createScopedClasses(componentName);
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
  display: IReadonlyDate;
  panel?: 'day' | 'month' | 'year';
}

class Datepicker extends PureComponent<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {
    firstDayOfWeek: 1,
  };
  static propTypes = {
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf<Date>(Date)])
  };
  private readonly refDiv: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      open: false,
      display: this.date2Value.clone,
      panel: 'day',
    };
    this.refDiv = React.createRef<HTMLDivElement>();
  }

  get date2Value() {
    return new Date2(this.props.value);
  }

  get formattedValue() {
    return this.date2Value.toDateString();
  }

  onFocusInput = () => {
    this.open();
  };
  onClickOutside = () => {
    this.close();
  };

  close() { this.setState({open: false}); }

  open() { this.setState({open: true, panel: 'day'}); }

  renderMonthPanel() {
    return (
      <div>
        Month
      </div>
    );
  }

  renderYearPanel() {
    return (
      <div>
        Year
      </div>
    );
  }

  onChange = (date: Date) => {
    this.props.onChange &&
    this.props.onChange(date);
    this.close();
  };

  renderDatepicker() {
    const {props, state} = this;
    return (
      <div ref={this.refDiv} className={sc()}>
        {
          this.state.panel === 'day' ?
            <DayPanel value={props.value} display={state.display}
                      onChange={this.onChange}/> :
            this.state.panel === 'month' ?
              this.renderMonthPanel() :
              this.renderYearPanel()
        }
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
