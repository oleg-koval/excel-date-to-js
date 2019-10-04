# excel-date-to-js

<p>
  <a href="https://github.com/oleg-koval/excel-date-to-js/actions" target="_blank">
    <img alt="CI" src="https://github.com/oleg-koval/excel-date-to-js/workflows/Test/badge.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/excel-date-to-js" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/excel-date-to-js.svg">
  </a>
  <a href="https://github.com/oleg-koval/excel-date-to-js#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/oleg-koval/excel-date-to-js/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/oleg-koval/excel-date-to-js/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Description

Converts Excel date in integer format into JS date. Dates are stored as numbers in Excel and count the number of days since January 0, 1900 (1900 standard, for mac it is 1904, which means January 0, 1904 is the start date). Times are handled internally as numbers between 0 and 1.

## Install

```sh
npm install -s excel-date-to-js
```

## Usage

```javascript
const { getJsDateFromExcel } = require("excel-date-to-js");
getJsDateFromExcel("42510");
// 2016-05-20T00:00:00.000Z
```

[Inspired by...](https://gist.github.com/christopherscott/2782634)
