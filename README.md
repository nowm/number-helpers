# number-helpers
Few simple helpers for numbers.

## Installation

```shell
npm install number-helpers
```

## Functions

### round

Rounding means replacing a number with an approximate value that has a shorter, simpler, or more explicit representation. For example, replacing $23.4476 with $23.45. (From Wikipedia.)

__round(number, decimals = 0)__

```javascript
import {round} from 'number-helpers';

round(123.4567, 3); // 123.456
round(123.4567, 2); // 123.45
round(123.4567, 1); // 123.4
round(123.4567, 0); // 123
```

### numberFormat

Formats a number with manually set thousands/decimal separators. does not affect number of decimals when correspond parameter is not a number

__numberFormat(number, decimals = null, decimalSeparator = '.', thousandsSeparator = ',')__

```javascript
import {numberFormat} from 'number-helpers';

numberFormat(123456.789, 2, '.', ',');    // 123,456.78
numberFormat(123456.789, 0, '.', ',');    // 123,456
numberFormat(123456.789, null);           // 123,456.789
```

### randomNumber

Generates a random number between `min` and `max`.

__randomNumber(min, max)__

```javascript
import {randomNumber} from 'number-helpers';

randomNumber(10, 20); // 11
```
