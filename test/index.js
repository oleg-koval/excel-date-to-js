const test = require('tape');
const mockDate = require('mockdate');

const { getJsDateFromExcel } = require('../index');

test('should convert Excel date to JS date', function (t) {
  mockDate.set('2020-05-19T22:00:00.000Z');

  const actual = getJsDateFromExcel(42510).toISOString();
  const expected = new Date('2016-05-19T22:00:00.000Z').toISOString();
  t.equal(actual, expected);
  t.end()

  mockDate.reset();
});

test('should convert Excel date to JS date', function (t) {
  mockDate.set('2020-05-19T22:00:00.000Z');

  const actual = getJsDateFromExcel(43078.416666666664).toISOString();
  const expected = new Date('2017-12-09T09:00:00.000Z').toISOString();
  t.equal(actual, expected);
  t.end()

  mockDate.reset()
});

test('should convert Excel date to JS date (5/19/2013 21:29, from https://goo.gl/Ejbext)', function (t) {
  mockDate.set('2020-05-19T22:00:00.000Z');

  const actual = getJsDateFromExcel(41413.895150462966).toISOString();
  const expected = new Date('2013-05-19T19:29:01.000Z').toISOString();
  t.equal(actual, expected);
  t.end()

  mockDate.reset()
});

test('should convert return an error on wrong input', function (t) {
  mockDate.set('2020-05-19T22:00:00.000Z');

  try {
    getJsDateFromExcel('text');
  } catch ({ message }) {
    t.equal(message, 'wrong input format')
  }
  t.end()

  mockDate.reset()
});

test('should convert return an error on wrong excel date', function (t) {
  mockDate.set('2020-05-19T22:00:00.000Z');

  try {
    getJsDateFromExcel(7312873827);
  } catch ({ message }) {
    t.equal(message, 'wrong excel date input')
  }
  t.end()

  mockDate.reset()
});
