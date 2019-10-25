'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intl = require('intl');

var _intl2 = _interopRequireDefault(_intl);

require('intl/locale-data/jsonp/en.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Use Numeric as name because Number is reserved name
 */
var Numeric = function () {
    function Numeric() {
        _classCallCheck(this, Numeric);
    }

    _createClass(Numeric, null, [{
        key: 'format',


        /**
         * Format the number
         *
         * @param {number} number
         * @param {number} precision
         * @return {string} formatted number
         */
        value: function format(number) {
            var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            return _intl2.default.NumberFormat(undefined, {
                style: 'decimal',
                useGrouping: true,
                minimumFractionDigits: precision,
                maximumFractionDigits: precision
            }).format(number);
        }
    }]);

    return Numeric;
}();

exports.default = Numeric;