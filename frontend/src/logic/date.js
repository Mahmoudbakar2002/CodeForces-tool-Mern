const minutesToSeconds = (minutes) => minutes * 60;
const hoursToSeconds = (hours) => hours * 60 * 60;
const daysToSeconds = (days) => days * 24 * 60 * 60;

/**
 * @param {*} startOfWeek  represent start day of week [0 : sunday , 1 :monday .... ]
 */
function getSecondsForStartWeek(startOfWeek = 6) {
  if (startOfWeek > 6 || startOfWeek < 0)
    throw new Error("day out of range [0,6]");

  let minusDay = 7 - startOfWeek;
  let date = new Date();

  let seconds = Math.floor(date.getTime() / 1000);
  seconds -= date.getSeconds();
  seconds -= minutesToSeconds(date.getMinutes());
  seconds -= hoursToSeconds(date.getHours());
  seconds -= daysToSeconds(minusDay);
  return seconds;
}
function getSecondsForStartDay() {
  let date = new Date();
  let seconds = Math.floor(date.getTime() / 1000);
  seconds -= date.getSeconds();
  seconds -= minutesToSeconds(date.getMinutes());
  seconds -= hoursToSeconds(date.getHours());
  return seconds;
}
function getSecondsForStartMonth() {
  let date = new Date();
  let seconds = Math.floor(date.getTime() / 1000);
  seconds -= date.getSeconds();
  seconds -= minutesToSeconds(date.getMinutes());
  seconds -= hoursToSeconds(date.getHours());
  seconds -= daysToSeconds(date.getDate());
  return seconds;
}
function getSecondsForStartYear() {
  let date = new Date();
  const dayOfYear = (date) =>
    Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
  let seconds = Math.floor(date.getTime() / 1000);
  seconds -= date.getSeconds();
  seconds -= minutesToSeconds(date.getMinutes());
  seconds -= hoursToSeconds(date.getHours());
  seconds -= daysToSeconds(dayOfYear(date));
  return seconds;
}
export {
  getSecondsForStartWeek,
  getSecondsForStartDay,
  getSecondsForStartMonth,
  getSecondsForStartYear,
  minutesToSeconds,
  hoursToSeconds,
  daysToSeconds,
};
