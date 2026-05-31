const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const EXCEL_EPOCH_OFFSET_DAYS = 25569;
const INVALID_INPUT_ERROR = 'wrong input format';
const INVALID_EXCEL_DATE_ERROR = 'wrong excel date input';

const isDate = (date) => Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());

const assertValidExcelDate = (excelDate) => {
  if (!Number(excelDate)) {
    throw new Error(INVALID_INPUT_ERROR);
  }
};

const assertValidDate = (date) => {
  if (!isDate(date)) {
    throw new Error(INVALID_INPUT_ERROR);
  }
};

const excelDateToMilliseconds = (excelDate) => (excelDate - EXCEL_EPOCH_OFFSET_DAYS) * MILLISECONDS_PER_DAY;
const jsDateToExcelDate = (date) => (date.getTime() / MILLISECONDS_PER_DAY) + EXCEL_EPOCH_OFFSET_DAYS;

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
const getJsDateFromExcel = (excelDate) => {
  assertValidExcelDate(excelDate);

  const date = new Date(excelDateToMilliseconds(excelDate));

  if (!isDate(date)) {
    throw new Error(INVALID_EXCEL_DATE_ERROR);
  }

  return date;
};

const getExcelDateFromJs = (date) => {
  assertValidDate(date);

  return jsDateToExcelDate(date);
};

module.exports = {
  getJsDateFromExcel,
  getExcelDateFromJs,
};
