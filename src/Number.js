class Number {

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

export default Number;
