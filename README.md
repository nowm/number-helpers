# simple-number-helpers
Few simple helpers for numbers.

## Installation

```shell
npm install number-helpers
```

## Functions

### round

Rounding means replacing a number with an approximate value that has a shorter, simpler, or more explicit representation. For example, replacing 23.4476 with 23.45. (From Wikipedia.)

`round(number, decimals = 0)`

```javascript
import {round} from 'number-helpers';

round(123.4567, 3); // 123.457
round(123.4567, 2); // 123.46
round(123.4567, 1); // 123.5
round(123.4567, 0); // 123
round(123.567, 0);  // 124
```

### numberFormat

Formats a number with manually set thousands/decimal separators. does not affect number of decimals when correspond parameter is not a number

`numberFormat(number, decimals = null, decimalSeparator = '.', thousandsSeparator = ',')`

```javascript
import {numberFormat} from 'number-helpers';

numberFormat(123456.789, 2, '.', ',');    // 123,456.78
numberFormat(123456.789, 0, '.', ',');    // 123,456
numberFormat(123456.789, null, '.', ','); // 123,456.789
numberFormat(123456.789);                 // 123,456.789
```

### randomNumber

Generates a random number between `min` and `max`.

`randomNumber(min, max)`

```javascript
import {randomNumber} from 'number-helpers';

randomNumber(10, 20); // 11
```
