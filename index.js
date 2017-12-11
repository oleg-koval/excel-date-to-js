/**
 * JavaScript dates can be constructed by passing milliseconds
 * since the Unix epoch (January 1, 1970) example: new Date(12312512312);
 * 1. Subtract number of days between:
 *    Jan 1, 1900 and Jan 1, 1970, plus 2 ("excel leap year bug")
 * 2. Convert to milliseconds.
 *
 * @method getJsDateFromExcel
 * @param  {Number}         excelDate
 * @return {Date}
 */
module.exports.getJsDateFromExcel = (excelDate) => {
  if (!Number(excelDate)) {
    throw new Error('wrong input format')
  }

  const secondsInDay = 24 * 60 * 60;
  const missingLeapYearDay = secondsInDay * 1000;
  const delta = excelDate - (25567 + 2);
  const parsed = delta * missingLeapYearDay;
  const parsedDate = new Date(parsed);

  const fractionalDay = excelDate - Math.floor(excelDate) + 0.0000001;
  let totalSeconds = Math.floor(secondsInDay * fractionalDay);
  const seconds = totalSeconds % 60;
  totalSeconds -= seconds;
  const hours = Math.floor(totalSeconds / (60 * 60));
  const minutes = Math.floor(totalSeconds / 60) % 60;

  const date = new Date(
    parsedDate.getFullYear(),
    parsedDate.getMonth(),
    parsedDate.getDate(),
    hours,
    minutes,
    seconds
  );

  if (Object.prototype.toString.call(date) === "[object Date]" ) {
    if (isNaN(date.getTime())) {
      throw new Error('wrong excel date input')
    }
    else {
      return date
    }
  }
}
