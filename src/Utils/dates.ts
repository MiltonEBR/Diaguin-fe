import {
  closestTo,
  isBefore,
  startOfToday,
  parseJSON,
  getDay,
  addDays,
  differenceInDays,
  getYear,
  format,
  compareAsc,
  isToday,
} from 'date-fns';

const todayDate = startOfToday();
const todayDay = getDay(todayDate);

const dayName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getNextDate = (dates: string[]): string => {
  if (dates.length <= 0) return '';

  const ds: Date[] = dates
    .filter((date) => !isBefore(parseJSON(date), todayDate))
    .map((date) => parseJSON(date));

  return ds.length > 0 ? closestTo(todayDate, ds).toJSON() : '';
};

export const dayToNextDates = (dates: string[]): string[] => {
  return dates.map((day) => {
    const d = Number(day);
    return addDays(
      todayDate,
      todayDay <= d ? d - todayDay : 6 - todayDay + d,
    ).toJSON();
  });
};

export const getDisplayDate = (date: string): string => {
  const day = parseJSON(date);
  if (isToday(day)) return 'Today';

  const dif = Math.abs(differenceInDays(todayDate, day));
  if (dif <= 6) return dayName[getDay(day)];

  const yDif = Math.abs(getYear(day) - getYear(todayDate));
  return yDif >= 1 ? format(day, 'dd/MMM/yyy') : format(day, 'MMM, do');
};

export const compAscDates = (a: string, b: string): number =>
  compareAsc(parseJSON(a), parseJSON(b));

export const dateIsToday = (date: string): boolean => isToday(parseJSON(date));
