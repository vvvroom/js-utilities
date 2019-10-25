'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _currencySymbolMap = require('currency-symbol-map');

var _currencySymbolMap2 = _interopRequireDefault(_currencySymbolMap);

var _intl = require('intl');

var _intl2 = _interopRequireDefault(_intl);

var _Numeric = require('./Numeric');

var _Numeric2 = _interopRequireDefault(_Numeric);

require('intl/locale-data/jsonp/en.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Currency = function () {
    function Currency() {
        _classCallCheck(this, Currency);
    }

    _createClass(Currency, null, [{
        key: 'format',


        /**
         * Format the number
         *
         * @param {number} number
         * @param {string} currencyCode
         * @param {number} precision
         * @return {string} formatted number
         * @deprecated use shortFormat() or longFormat()
         */
        value: function format(number, currencyCode) {
            var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

            return _intl2.default.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
                currencyDisplay: 'code',
                useGrouping: true,
                minimumFractionDigits: precision,
                maximumFractionDigits: precision
            }).format(number);
        }

        /**
         * Currency in short format, mostly used for price breakdown
         *
         * @param {number} number
         * @param {string} currencyCode
         * @return {string} formatted currency. e.g. "$1,099.99"
         * @throws When parameter "currencyCode" invalid
         */

    }, {
        key: 'shortFormat',
        value: function shortFormat(number, currencyCode) {
            var currencySymbol = (0, _currencySymbolMap2.default)(currencyCode);

            if (currencySymbol === undefined) {
                throw new ('Invalid currency code ' + currencyCode)();
            }

            var numberFormatted = _Numeric2.default.format(number);

            return currencySymbol + numberFormatted;
        }

        /**
         * Currency in short format, mostly used for price breakdown
         *
         * @param {number} number
         * @param {string} currencyCode
         * @return {string} formatted currency. e.g. "AUD $1,099.99"
         * @throws When currencyCode invalid
         */

    }, {
        key: 'longFormat',
        value: function longFormat(number, currencyCode) {
            var currencySymbol = (0, _currencySymbolMap2.default)(currencyCode);

            if (currencySymbol === undefined) {
                throw new ('Invalid currency code ' + currencyCode)();
            }

            var numberFormatted = _Numeric2.default.format(number);

            return currencyCode.toUpperCase() + ' ' + currencySymbol + numberFormatted;
        }

        /**
         * Convert a currency code to its currency symbol
         *
         * @param  {string} currencyCode
         * @return {string} - the currency symbol
         * @deprecated since 1.1.0 and will removed at 1.3.0
         * @see Currency.format
         */

    }, {
        key: 'currencyToSign',
        value: function currencyToSign(currencyCode) {
            switch (currencyCode) {
                case 'AED':
                    return 'د.إ.‏';
                case 'AFN':
                    return '؋';
                case 'ALL':
                    return 'Lek';
                case 'AMD':
                    return 'դր.';
                case 'ARS':
                    return '$';
                case 'AUD':
                    return '$';
                case 'AZN':
                    return 'man.';
                case 'BAM':
                    return 'KM';
                case 'BDT':
                    return '৳';
                case 'BGN':
                    return 'лв.';
                case 'BHD':
                    return 'د.ب.‏';
                case 'BND':
                    return '$';
                case 'BOB':
                    return '$b';
                case 'BRL':
                    return 'R$';
                case 'BYR':
                    return 'р.';
                case 'BZD':
                    return 'BZ$';
                case 'CAD':
                    return '$';
                case 'CHF':
                    return 'fr.';
                case 'CLP':
                    return '$';
                case 'CNY':
                    return '¥';
                case 'COP':
                    return '$';
                case 'CRC':
                    return '₡';
                case 'CSD':
                    return 'Din.';
                case 'CZK':
                    return 'Kč';
                case 'DKK':
                    return 'kr.';
                case 'DOP':
                    return 'RD$';
                case 'DZD':
                    return 'DZD';
                case 'EEK':
                    return 'kr';
                case 'EGP':
                    return 'ج.م.‏';
                case 'ETB':
                    return 'ETB';
                case 'EUR':
                    return '€';
                case 'FJD':
                    return 'FJ$';
                case 'GBP':
                    return '£';
                case 'GEL':
                    return 'Lari';
                case 'GTQ':
                    return 'Q';
                case 'HKD':
                    return 'HK$';
                case 'HNL':
                    return 'L.';
                case 'HRK':
                    return 'kn';
                case 'HUF':
                    return 'Ft';
                case 'IDR':
                    return 'Rp';
                case 'ILS':
                    return '₪';
                case 'INR':
                    return '=ु';
                case 'IQD':
                    return 'د.ع.‏';
                case 'IRR':
                    return 'ريال';
                case 'ISK':
                    return 'kr.';
                case 'JMD':
                    return 'J$';
                case 'JOD':
                    return 'د.ا.‏';
                case 'JPY':
                    return '¥';
                case 'KES':
                    return 'S';
                case 'KGS':
                    return 'сом';
                case 'KHR':
                    return '៛';
                case 'KRW':
                    return '₩';
                case 'KWD':
                    return 'د.ك.‏';
                case 'KZT':
                    return 'Т';
                case 'LAK':
                    return '₭';
                case 'LBP':
                    return 'ل.ل.‏';
                case 'LKR':
                    return '=ු.';
                case 'LTL':
                    return 'Lt';
                case 'LVL':
                    return 'Ls';
                case 'LYD':
                    return 'د.ل.‏';
                case 'MAD':
                    return 'د.م.‏';
                case 'MKD':
                    return 'ден.';
                case 'MNT':
                    return '₮';
                case 'MOP':
                    return 'MOP';
                case 'MVR':
                    return 'ރ.';
                case 'MXN':
                    return '$';
                case 'MYR':
                    return 'RM';
                case 'NIO':
                    return 'N';
                case 'NOK':
                    return 'kr';
                case 'NPR':
                    return '=ु';
                case 'NZD':
                    return '$';
                case 'OMR':
                    return 'ر.ع.‏';
                case 'PAB':
                    return 'B/.';
                case 'PEN':
                    return 'S/.';
                case 'PHP':
                    return 'PhP';
                case 'PKR':
                    return 'Rs';
                case 'PLN':
                    return 'zł';
                case 'PYG':
                    return 'Gs';
                case 'QAR':
                    return 'ر.ق.‏';
                case 'RON':
                    return 'lei';
                case 'RSD':
                    return 'Din.';
                case 'RUB':
                    return 'р.';
                case 'RWF':
                    return 'RWF';
                case 'SAR':
                    return 'ر.س.‏';
                case 'SEK':
                    return 'kr';
                case 'SGD':
                    return '$';
                case 'SYP':
                    return 'ل.س.‏';
                case 'THB':
                    return '฿';
                case 'TJS':
                    return 'т.р.';
                case 'TMT':
                    return 'm.';
                case 'TND':
                    return 'د.ت.‏';
                case 'TRY':
                    return 'TL';
                case 'TTD':
                    return 'TT$';
                case 'TWD':
                    return 'NT$';
                case 'UAH':
                    return '₴';
                case 'USD':
                    return '$';
                case 'UYU':
                    return '$U';
                case 'UZS':
                    return 'so\'m';
                case 'VEF':
                    return 'Bs. F.';
                case 'VUV':
                    return 'VT';
                case 'VND':
                    return '₫';
                case 'XOF':
                    return 'XOF';
                case 'YER':
                    return 'ر.ي.‏';
                case 'ZAR':
                    return 'R';
                case 'ZWL':
                    return 'Z$';
            }
        }

        /**
         *  Convert price
         *
         *  @param {number} originalPrice
         *  @param {number} originalRate
         *  @param {number} targetRate
         *  @return {number}
         */

    }, {
        key: 'convertPrice',
        value: function convertPrice(originalPrice, originalRate, targetRate) {
            var convertedPrice = originalPrice / originalRate * targetRate;

            return parseFloat(convertedPrice.toFixed(2));
        }

        /**
         * Build price text to show price converter
         *
         * @param {number} originalPrice
         * @param {string} originalCurrency ISO-4217
         * @param {string} targetCurrency ISO-4217
         * @param {number} originalRate
         * @param {number} targetRate
         * @return {string} e.g: "£100 (A$120)"
         */

    }, {
        key: 'buildPriceText',
        value: function buildPriceText(originalPrice, originalCurrency, targetCurrency, originalRate, targetRate) {
            // if currency the same, simply return with original currency
            if (originalCurrency === targetCurrency) {
                return Currency.format(originalPrice, originalCurrency);
            }

            var foreignPriceString = Currency.format(this.convertPrice(originalPrice, originalRate, targetRate), targetCurrency);
            var originalPriceString = Currency.format(originalPrice, originalCurrency);

            return foreignPriceString + ' <span class="original-price">(' + originalPriceString + ')</span>';
        }

        /**
         * Get exchange rate
         *
         * @param {string} endpoint
         * @param {string} originalCurrency
         * @param {string} targetCurrency
         * @return {Promise}
         */

    }, {
        key: 'getExchangeRate',
        value: function getExchangeRate(endpoint, originalCurrency, targetCurrency) {
            return _axios2.default.post(endpoint, {
                'fromCurrency': originalCurrency,
                'toCurrency': targetCurrency
            });
        }
    }]);

    return Currency;
}();

exports.default = Currency;