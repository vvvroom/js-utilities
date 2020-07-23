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

        /**
         * Get currency code from country code
         * @param {string} countryCode
         * @return {string}
         */

    }, {
        key: 'countryCodeToCurrencyCode',
        value: function countryCodeToCurrencyCode(countryCode) {
            switch (countryCode) {
                case 'NZ':
                    return 'NZD';
                case 'CK':
                    return 'NZD';
                case 'NU':
                    return 'NZD';
                case 'PN':
                    return 'NZD';
                case 'TK':
                    return 'NZD';
                case 'AU':
                    return 'AUD';
                case 'CX':
                    return 'AUD';
                case 'CC':
                    return 'AUD';
                case 'HM':
                    return 'AUD';
                case 'KI':
                    return 'AUD';
                case 'NR':
                    return 'AUD';
                case 'NF':
                    return 'AUD';
                case 'TV':
                    return 'AUD';
                case 'AS':
                    return 'EUR';
                case 'AD':
                    return 'EUR';
                case 'AT':
                    return 'EUR';
                case 'BE':
                    return 'EUR';
                case 'FI':
                    return 'EUR';
                case 'FR':
                    return 'EUR';
                case 'GF':
                    return 'EUR';
                case 'TF':
                    return 'EUR';
                case 'DE':
                    return 'EUR';
                case 'GR':
                    return 'EUR';
                case 'GP':
                    return 'EUR';
                case 'IE':
                    return 'EUR';
                case 'IT':
                    return 'EUR';
                case 'LU':
                    return 'EUR';
                case 'MQ':
                    return 'EUR';
                case 'YT':
                    return 'EUR';
                case 'MC':
                    return 'EUR';
                case 'NL':
                    return 'EUR';
                case 'PT':
                    return 'EUR';
                case 'RE':
                    return 'EUR';
                case 'WS':
                    return 'EUR';
                case 'SM':
                    return 'EUR';
                case 'SI':
                    return 'EUR';
                case 'ES':
                    return 'EUR';
                case 'VA':
                    return 'EUR';
                case 'GS':
                    return 'GBP';
                case 'GB':
                    return 'GBP';
                case 'JE':
                    return 'GBP';
                case 'IO':
                    return 'USD';
                case 'GU':
                    return 'USD';
                case 'MH':
                    return 'USD';
                case 'FM':
                    return 'USD';
                case 'MP':
                    return 'USD';
                case 'PW':
                    return 'USD';
                case 'PR':
                    return 'USD';
                case 'TC':
                    return 'USD';
                case 'US':
                    return 'USD';
                case 'UM':
                    return 'USD';
                case 'VG':
                    return 'USD';
                case 'VI':
                    return 'USD';
                case 'HK':
                    return 'HKD';
                case 'CA':
                    return 'CAD';
                case 'JP':
                    return 'JPY';
                case 'AF':
                    return 'AFN';
                case 'AL':
                    return 'ALL';
                case 'DZ':
                    return 'DZD';
                case 'AI':
                    return 'XCD';
                case 'AG':
                    return 'XCD';
                case 'DM':
                    return 'XCD';
                case 'GD':
                    return 'XCD';
                case 'MS':
                    return 'XCD';
                case 'KN':
                    return 'XCD';
                case 'LC':
                    return 'XCD';
                case 'VC':
                    return 'XCD';
                case 'AR':
                    return 'ARS';
                case 'AM':
                    return 'AMD';
                case 'AW':
                    return 'ANG';
                case 'AN':
                    return 'ANG';
                case 'AZ':
                    return 'AZN';
                case 'BS':
                    return 'BSD';
                case 'BH':
                    return 'BHD';
                case 'BD':
                    return 'BDT';
                case 'BB':
                    return 'BBD';
                case 'BY':
                    return 'BYR';
                case 'BZ':
                    return 'BZD';
                case 'BJ':
                    return 'XOF';
                case 'BF':
                    return 'XOF';
                case 'GW':
                    return 'XOF';
                case 'CI':
                    return 'XOF';
                case 'ML':
                    return 'XOF';
                case 'NE':
                    return 'XOF';
                case 'SN':
                    return 'XOF';
                case 'TG':
                    return 'XOF';
                case 'BM':
                    return 'BMD';
                case 'BT':
                    return 'INR';
                case 'IN':
                    return 'INR';
                case 'BO':
                    return 'BOB';
                case 'BW':
                    return 'BWP';
                case 'BV':
                    return 'NOK';
                case 'NO':
                    return 'NOK';
                case 'SJ':
                    return 'NOK';
                case 'BR':
                    return 'BRL';
                case 'BN':
                    return 'BND';
                case 'BG':
                    return 'BGN';
                case 'BI':
                    return 'BIF';
                case 'KH':
                    return 'KHR';
                case 'CM':
                    return 'XAF';
                case 'CF':
                    return 'XAF';
                case 'TD':
                    return 'XAF';
                case 'CG':
                    return 'XAF';
                case 'GQ':
                    return 'XAF';
                case 'GA':
                    return 'XAF';
                case 'CV':
                    return 'CVE';
                case 'KY':
                    return 'KYD';
                case 'CL':
                    return 'CLP';
                case 'CN':
                    return 'CNY';
                case 'CO':
                    return 'COP';
                case 'KM':
                    return 'KMF';
                case 'CD':
                    return 'CDF';
                case 'CR':
                    return 'CRC';
                case 'HR':
                    return 'HRK';
                case 'CU':
                    return 'CUP';
                case 'CY':
                    return 'CYP';
                case 'CZ':
                    return 'CZK';
                case 'DK':
                    return 'DKK';
                case 'FO':
                    return 'DKK';
                case 'GL':
                    return 'DKK';
                case 'DJ':
                    return 'DJF';
                case 'DO':
                    return 'DOP';
                case 'TP':
                    return 'IDR';
                case 'ID':
                    return 'IDR';
                case 'EC':
                    return 'ECS';
                case 'EG':
                    return 'EGP';
                case 'SV':
                    return 'SVC';
                case 'ER':
                    return 'ETB';
                case 'ET':
                    return 'ETB';
                case 'EE':
                    return 'EEK';
                case 'FK':
                    return 'FKP';
                case 'FJ':
                    return 'FJD';
                case 'PF':
                    return 'XPF';
                case 'NC':
                    return 'XPF';
                case 'WF':
                    return 'XPF';
                case 'GM':
                    return 'GMD';
                case 'GE':
                    return 'GEL';
                case 'GI':
                    return 'GIP';
                case 'GT':
                    return 'GTQ';
                case 'GN':
                    return 'GNF';
                case 'GY':
                    return 'GYD';
                case 'HT':
                    return 'HTG';
                case 'HN':
                    return 'HNL';
                case 'HU':
                    return 'HUF';
                case 'IS':
                    return 'ISK';
                case 'IR':
                    return 'IRR';
                case 'IQ':
                    return 'IQD';
                case 'IL':
                    return 'ILS';
                case 'JM':
                    return 'JMD';
                case 'JO':
                    return 'JOD';
                case 'KZ':
                    return 'KZT';
                case 'KE':
                    return 'KES';
                case 'KP':
                    return 'KPW';
                case 'KR':
                    return 'KRW';
                case 'KW':
                    return 'KWD';
                case 'KG':
                    return 'KGS';
                case 'LA':
                    return 'LAK';
                case 'LV':
                    return 'LVL';
                case 'LB':
                    return 'LBP';
                case 'LS':
                    return 'LSL';
                case 'LR':
                    return 'LRD';
                case 'LY':
                    return 'LYD';
                case 'LI':
                    return 'CHF';
                case 'CH':
                    return 'CHF';
                case 'LT':
                    return 'LTL';
                case 'MO':
                    return 'MOP';
                case 'MK':
                    return 'MKD';
                case 'MG':
                    return 'MGA';
                case 'MW':
                    return 'MWK';
                case 'MY':
                    return 'MYR';
                case 'MV':
                    return 'MVR';
                case 'MT':
                    return 'MTL';
                case 'MR':
                    return 'MRO';
                case 'MU':
                    return 'MUR';
                case 'MX':
                    return 'MXN';
                case 'MD':
                    return 'MDL';
                case 'MN':
                    return 'MNT';
                case 'MA':
                    return 'MAD';
                case 'EH':
                    return 'MAD';
                case 'MZ':
                    return 'MZN';
                case 'MM':
                    return 'MMK';
                case 'NA':
                    return 'NAD';
                case 'NP':
                    return 'NPR';
                case 'NI':
                    return 'NIO';
                case 'NG':
                    return 'NGN';
                case 'OM':
                    return 'OMR';
                case 'PK':
                    return 'PKR';
                case 'PA':
                    return 'PAB';
                case 'PG':
                    return 'PGK';
                case 'PY':
                    return 'PYG';
                case 'PE':
                    return 'PEN';
                case 'PH':
                    return 'PHP';
                case 'PL':
                    return 'PLN';
                case 'QA':
                    return 'QAR';
                case 'RO':
                    return 'RON';
                case 'RU':
                    return 'RUB';
                case 'RW':
                    return 'RWF';
                case 'ST':
                    return 'STD';
                case 'SA':
                    return 'SAR';
                case 'SC':
                    return 'SCR';
                case 'SL':
                    return 'SLL';
                case 'SG':
                    return 'SGD';
                case 'SK':
                    return 'SKK';
                case 'SB':
                    return 'SBD';
                case 'SO':
                    return 'SOS';
                case 'ZA':
                    return 'ZAR';
                case 'LK':
                    return 'LKR';
                case 'SD':
                    return 'SDG';
                case 'SR':
                    return 'SRD';
                case 'SZ':
                    return 'SZL';
                case 'SE':
                    return 'SEK';
                case 'SY':
                    return 'SYP';
                case 'TW':
                    return 'TWD';
                case 'TJ':
                    return 'TJS';
                case 'TZ':
                    return 'TZS';
                case 'TH':
                    return 'THB';
                case 'TO':
                    return 'TOP';
                case 'TT':
                    return 'TTD';
                case 'TN':
                    return 'TND';
                case 'TR':
                    return 'TRY';
                case 'TM':
                    return 'TMT';
                case 'UG':
                    return 'UGX';
                case 'UA':
                    return 'UAH';
                case 'AE':
                    return 'AED';
                case 'UY':
                    return 'UYU';
                case 'UZ':
                    return 'UZS';
                case 'VU':
                    return 'VUV';
                case 'VE':
                    return 'VEF';
                case 'VN':
                    return 'VND';
                case 'YE':
                    return 'YER';
                case 'ZM':
                    return 'ZMK';
                case 'ZW':
                    return 'ZWD';
                case 'AX':
                    return 'EUR';
                case 'AO':
                    return 'AOA';
                case 'AQ':
                    return 'AQD';
                case 'BA':
                    return 'BAM';
                case 'GH':
                    return 'GHS';
                case 'GG':
                    return 'GGP';
                case 'IM':
                    return 'GBP';
                case 'ME':
                    return 'EUR';
                case 'PS':
                    return 'JOD';
                case 'BL':
                    return 'EUR';
                case 'SH':
                    return 'GBP';
                case 'MF':
                    return 'ANG';
                case 'PM':
                    return 'EUR';
                case 'RS':
                    return 'RSD';
                case 'USAF':
                    return 'USD';
                default:
                    return '';
            }
        }
    }]);

    return Currency;
}();

exports.default = Currency;