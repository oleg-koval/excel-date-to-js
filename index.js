/**
 * JavaScript dates can be constructed by passing milliseconds
 * since the Unix epoch (January 1, 1970) example: new Date(12312512312);
 * 1. Subtract number of days between:
 *    Jan 1, 1900 and Jan 1, 1970, plus 2 ("excel leap year bug")
 * 2. Convert to milliseconds.
 *
 * @method convertExcelDate
 * @param  {Number}         excelDate
 * @return {Date}
 */
module.exports.convertExcelDate = (excelDate) => {
  if (!Number(excelDate)) {
    throw new Error('wrong input format')
  }

  const secondsInDay = 24 * 60 * 60;
  const missingLeapYearDay = secondsInDay * 1000;
  const delta = excelDate - (25567 + 2);
  const parsed = delta * missingLeapYearDay;
  const date = new Date(parsed)

  if (Object.prototype.toString.call(date) === "[object Date]" ) {
    if (isNaN(date.getTime())) {
      throw new Error('wrong excel date input')
    }
    else {
      return date
    }
  }
}
