import { format } from 'date-fns';

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MS_IN_SECOND = 1000;
const DEFAULT_DATE_FORMAT = 'dd MMM yyyy';

const getNthDaysFromNow = (numberOfDays: number) => {
    const currentTimeInMs = new Date().getTime();
    const nthDaysFromCurrentTimeInMs = currentTimeInMs + numberOfDays * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND;
    const nthDaysFromCurrentTimeDate = new Date(nthDaysFromCurrentTimeInMs);

    return format(nthDaysFromCurrentTimeDate, DEFAULT_DATE_FORMAT); 
};

const getCurrentHour = () => new Date().getHours();

const addHoursFromCurrentTime = (hours: number) => new Date().setTime(new Date().getTime() + (hours*60*60*1000));

const getNthHoursFromCurrentTime = (hours: number) => new Date(addHoursFromCurrentTime(hours)).getHours();

export {
    getNthDaysFromNow,
    getCurrentHour,
    addHoursFromCurrentTime,
    getNthHoursFromCurrentTime,
};
