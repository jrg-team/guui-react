import callNew from './callNew';

const regex = /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/;

function stringToDate(str: string) {
  const matches = str.match(regex);
  if (matches) {
    const [, year, month, day]: RegExpMatchArray = matches;
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  } else {
    throw new Error('invalid date');
    return undefined;
  }
}

type YearMonthDay = [number, number, number];
type YMD = YearMonthDay;

function getYMD(date: Date): YMD {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [year, month, day];
}

function dateToString(date?: Date) {
  if (!date) { return date; }
  const [year, month, day] = getYMD(date);
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function pad(n: number) {
  return (n < 10 ? '0' : '') + n;
}

class Date2 {
  private readonly value: Date;

  toString(format?: string) { return 'todo'; }
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
  get date() { return this.value; }
  toISOString() {return this.value.toISOString();}
  constructor(value?: number | string | Date);
  constructor(year: number, month: number, day?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
  constructor(...args: any) {
    if (args.length === 1) {
      if (args[0] instanceof Date2) {
        this.value = new Date((args[0] as Date2).timestamp);
      } else {
        this.value = new Date(args[0]);
      }
    } else {
      this.value = callNew(Date, args);
    }
  }
  static fromString(s: string, format?: string): Date2 {
    return new Date2(s);
  }
  static now(): Date2 {
    return new Date2();
  }
}

export default Date2;

export {
  stringToDate,
  dateToString,
  getYMD,
};
