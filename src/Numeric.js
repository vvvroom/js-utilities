if (!global.Intl) {
    // line below allows for code splitting
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js'
    ], function (require) {
        // requires like this will just initialize them, and the modules set the globals
        require('intl');
        require('intl/locale-data/jsonp/en.js');
    });
}

/**
 * Use Numeric as name because Number is reserved name
 */
class Numeric {

    /**
     * Format the number
     *
     * @param {number} number
     * @param {number} precision
     * @return {string} formatted number
     */
    static format(number, precision = 2) {
        return Intl
            .NumberFormat(
                undefined,
                {
                    style: 'decimal',
                    useGrouping: true,
                    minimumFractionDigits: precision,
                    maximumFractionDigits: precision
                }
            )
            .format(number);
    }
}

export default Numeric;
