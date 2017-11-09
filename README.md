[![Build Status](https://travis-ci.org/oleg-koval/excel-date-to-js.svg?branch=master)](https://travis-ci.org/oleg-koval/excel-date-to-js)

# Description

Convert Excel date in integer format into JS date. Dates are stored as numbers in Excel and count the number of days since January 0, 1900 (1900 standard, for mac it is 1904, which means January 0, 1904 is the start date). Times are handled internally as numbers between 0 and 1.

# Usage:

```javascript
const { getJsDateFromExcel } = require('excel-date-to-js');
getJsDateFromExcel('42510');
// 2016-05-20T00:00:00.000Z
```

# Inspired by:
https://gist.github.com/christopherscott/2782634
