/**
 * Checks if a variable is a finite number.
 *
 * NaN and Infinity values considered to be non-numbers
 *
 * @param {*} variable
 *
 * @return {boolean}
 *
 * @internal
 */
function isNumber(variable) {
    if (typeof variable === 'bigint') {
        return true;
    }

    if (typeof variable !== 'number') {
        return false;
    }

    let result;

    try {
        result = isFinite(variable);
    } catch (error) {
        result = false;
    }

    return result;
}

/**
 * @param {number} number
 * @param {number} decimals
 * @return {number}
 */
function round(number, decimals = 0) {
    if (!isNumber(number)) {
        return number;
    }

    const newDecimals = isNumber(decimals) && decimals >= 0 ? Math.round(decimals) : 0;
    if (!newDecimals) {
        return Math.round(number);
    }

    const power = 10 ** newDecimals;

    return Math.round((number + Number.EPSILON) * power) / power;
}

/**
 * @param {number} number
 * @param {number|null} decimals
 * @param {string} decimalSeparator
 * @param {string} thousandsSeparator
 */
function numberFormat(number, decimals = null, decimalSeparator = '.', thousandsSeparator = ',') {
    if (!isNumber(number)) {
        return number;
    }

    let [integer, fraction] = number.toString().split('.');
    if (typeof fraction !== "string") {
        fraction = '';
    }

    let newDecimals = decimals;
    if (!isNumber(newDecimals)) {
        newDecimals = fraction ? fraction.length : 0;
    }

    fraction = fraction.substring(0, newDecimals);

    integer = integer.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, thousandsSeparator);

    if (!fraction) {
        return integer;
    }

    return [integer, fraction].join(decimalSeparator);
}

/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomNumber(min, max) {
    let newMin = isNumber(min) ? min : 0;
    let newMax = isNumber(max) ? max : min;

    if (newMin > newMax) {
        [newMin, newMax] = [newMax, newMin];
    }

    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

module.exports = {
    round,
    numberFormat,
    randomNumber,
};
