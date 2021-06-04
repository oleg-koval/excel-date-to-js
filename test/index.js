const test = require('tape');
const { getJsDateFromExcel, getExcelDateFromJs } = require('../index');

test('should convert Excel date to JS date (number)', function (t) {
  const actual = getJsDateFromExcel(42510).toISOString();
  const expected = new Date('2016-05-20T00:00:00.000Z').toISOString();
  t.equal(actual, expected);
  t.end()
});

test('should convert Excel date to JS date (string)', function (t) {
  const actual = getJsDateFromExcel('42510').toISOString();
  const expected = new Date('2016-05-20T00:00:00.000Z').toISOString();
  t.equal(actual, expected);
  t.end()
});

test('should convert return an error on wrong input', function (t) {
  try {
    const actual = getJsDateFromExcel('text');
  } catch ({ message }) {
    t.equal(message, 'wrong input format')
  }
  t.end()
});

test('should convert return an error on wrong excel date', function (t) {
  try {
    const actual = getJsDateFromExcel(7312873827);
  } catch ({ message }) {
    t.equal(message, 'wrong excel date input')
  }
  t.end()
});

test('should convert JS date to Excel date',  (t) => {
  const date = new Date('2016-05-20T00:00:00.000Z');
  const expected = 42510;

  const actual = getExcelDateFromJs(date);

  t.equal(actual, expected)

  t.end()
});

test('should return an error on wrong input while converting JS date (wrong type)', function (t) {
  try {
    getExcelDateFromJs('text');
  } catch ({ message }) {
    t.equal(message, 'wrong input format')
    t.end()
  }
});

test('should return an error on wrong input while converting JS date (invalid date)', function (t) {
  try {
    getExcelDateFromJs(new Date('text'));
  } catch ({ message }) {
    t.equal(message, 'wrong input format')
    t.end()
  }
});
