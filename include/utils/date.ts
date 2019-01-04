import callNew from './callNew';

export function pad(n: number) {
  return (n < 10 ? '0' : '') + n;
}

class Date2 {
  private readonly value: Date;
  static stringFormat = 'yyyy-MM-dd HH:mm:ss';
  static dateStringFormat = 'yyyy-MM-dd';
  constructor(value?: number | string | Date);
  constructor(year: number, month: number, day?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
  constructor(...args: any) {
    if (args.length === 1 && args[0] instanceof Date2) {
      this.value = new Date((args[0] as Date2).timestamp);
    } else if (args.length > 1) {
      this.value = callNew(Date, args.map((n: number, i: number) => i === 1 ? n - 1 : n));
    } else {
      this.value = callNew(Date, args);
    }
  }

  // see https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings#custom-date-and-time-format-strings
  // supported
  /**
   * 格式化字符串
   * @param format - supported format: yyyy MM M dd d HH H hh h mm m ss s tt
   */
  toString(format = Date2.stringFormat): string {
    return format.replace(/yyyy|MM|M|dd|d|HH|H|mm|m|ss|s/g, (match) => {
      if (match === 'yyyy') {
        return this.year.toString();
      } else if (match === 'MM') {
        return pad(this.month).toString();
      } else if (match === 'M') {
        return this.month.toString();
      } else if (match === 'dd') {
        return pad(this.day).toString();
      } else if (match === 'd') {
        return this.day.toString();
      } else if (match === 'HH') {
        return pad(this.hours).toString();
      } else if (match === 'H') {
        return this.hours.toString();
      } else if (match === 'mm') {
        return pad(this.minutes).toString();
      } else if (match === 'm') {
        return this.minutes.toString();
      } else if (match === 'ss') {
        return pad(this.seconds).toString();
      } else if (match === 's') {
        return this.seconds.toString();
      } else {
        return match;
      }
    });
  }
  toDateString() {
    return this.toString(Date2.dateStringFormat);
  }
  valueOf() { return this.timestamp; }
  get clone() { return new Date2(this.value); }
  get parts() { return [this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.ms]; }
  get timestamp() { return this.value.getTime(); }
  get year() { return this.value.getFullYear(); }
  set year(value) { this.value.setFullYear(value); }
  get month() { return this.value.getMonth() + 1; }
  set month(value) { this.value.setMonth(value - 1); }
  get day() { return this.value.getDate(); }
  set day(value) { this.value.setDate(value); }
  setDay(value: number) {
    this.day = value;
    return this;
  }
  addDay(n: number) {
    this.day += n;
    return this;
  }
  get dayOfWeek() { return this.value.getDay(); }
  get hours() { return this.value.getHours(); }
  set hours(value) { this.value.setHours(value); }
  get minutes() { return this.value.getMinutes(); }
  set minutes(value) { this.value.setMinutes(value); }
  get seconds() { return this.value.getSeconds(); }
  set seconds(value) { this.value.setSeconds(value); }
  get ms() { return this.value.getMilliseconds(); }
  set ms(value) { this.value.setMilliseconds(value); }
  toDate() { return this.value; }
  toISOString() {return this.value.toISOString();}
  static fromString(s: string, format?: string): Date2 {
    return new Date2(s);
  }
  static now(): Date2 {
    return new Date2();
  }
}

export default Date2;
