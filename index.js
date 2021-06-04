const SECONDS_IN_DAY = 24 * 60 * 60;
const MISSING_LEAP_YEAR_DAY = SECONDS_IN_DAY * 1000;
const MAGIC_NUMBER_OF_DAYS = (25567 + 2);

const isDate = date => Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime())

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

  const delta = excelDate - MAGIC_NUMBER_OF_DAYS;
  const parsed = delta * MISSING_LEAP_YEAR_DAY;
  const date = new Date(parsed)

  if (!isDate(date)) {
      throw new Error('wrong excel date input')
  }

  return date
}

module.exports.getExcelDateFromJs = (date) => {
  if (!isDate(date)) {
      throw new Error('wrong input format')
  }

  return (date.getTime() / MISSING_LEAP_YEAR_DAY) + MAGIC_NUMBER_OF_DAYS
}
