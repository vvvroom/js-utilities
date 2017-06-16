import Axios from 'axios';

export default class Currency {

    /**
     * Convert a currency code to its currency symbol 
     * 
     * @param  {string} currencyCode
     * @return {string} - the currency symbol
     */
    static currencyToSign(currencyCode) {
        switch(currencyCode) {
            case 'AED': return 'د.إ.‏'; break;
            case 'AFN': return '؋'; break;
            case 'ALL': return 'Lek'; break;
            case 'AMD': return 'դր.'; break;
            case 'ARS': return '$'; break;
            case 'AUD': return '$'; break;
            case 'AZN': return 'man.'; break;
            case 'BAM': return 'KM'; break;
            case 'BDT': return '৳'; break;
            case 'BGN': return 'лв.'; break;
            case 'BHD': return 'د.ب.‏'; break;
            case 'BND': return '$'; break;
            case 'BOB': return '$b'; break;
            case 'BRL': return 'R$'; break;
            case 'BYR': return 'р.'; break;
            case 'BZD': return 'BZ$'; break;
            case 'CAD': return '$'; break;
            case 'CHF': return 'fr.'; break;
            case 'CLP': return '$'; break;
            case 'CNY': return '¥'; break;
            case 'COP': return '$'; break;
            case 'CRC': return '₡'; break;
            case 'CSD': return 'Din.'; break;
            case 'CZK': return 'Kč'; break;
            case 'DKK': return 'kr.'; break;
            case 'DOP': return 'RD$'; break;
            case 'DZD': return 'DZD'; break;
            case 'EEK': return 'kr'; break;
            case 'EGP': return 'ج.م.‏'; break;
            case 'ETB': return 'ETB'; break;
            case 'EUR': return '€'; break;
            case 'GBP': return '£'; break;
            case 'GEL': return 'Lari'; break;
            case 'GTQ': return 'Q'; break;
            case 'HKD': return 'HK$'; break;
            case 'HNL': return 'L.'; break;
            case 'HRK': return 'kn'; break;
            case 'HUF': return 'Ft'; break;
            case 'IDR': return 'Rp'; break;
            case 'ILS': return '₪'; break;
            case 'INR': return '=ु'; break;
            case 'IQD': return 'د.ع.‏'; break;
            case 'IRR': return 'ريال'; break;
            case 'ISK': return 'kr.'; break;
            case 'JMD': return 'J$'; break;
            case 'JOD': return 'د.ا.‏'; break;
            case 'JPY': return '¥'; break;
            case 'KES': return 'S'; break;
            case 'KGS': return 'сом'; break;
            case 'KHR': return '៛'; break;
            case 'KRW': return '₩'; break;
            case 'KWD': return 'د.ك.‏'; break;
            case 'KZT': return 'Т'; break;
            case 'LAK': return '₭'; break;
            case 'LBP': return 'ل.ل.‏'; break;
            case 'LKR': return '=ු.'; break;
            case 'LTL': return 'Lt'; break;
            case 'LVL': return 'Ls'; break;
            case 'LYD': return 'د.ل.‏'; break;
            case 'MAD': return 'د.م.‏'; break;
            case 'MKD': return 'ден.'; break;
            case 'MNT': return '₮'; break;
            case 'MOP': return 'MOP'; break;
            case 'MVR': return 'ރ.'; break;
            case 'MXN': return '$'; break;
            case 'MYR': return 'RM'; break;
            case 'NIO': return 'N'; break;
            case 'NOK': return 'kr'; break;
            case 'NPR': return '=ु'; break;
            case 'NZD': return '$'; break;
            case 'OMR': return 'ر.ع.‏'; break;
            case 'PAB': return 'B/.'; break;
            case 'PEN': return 'S/.'; break;
            case 'PHP': return 'PhP'; break;
            case 'PKR': return 'Rs'; break;
            case 'PLN': return 'zł'; break;
            case 'PYG': return 'Gs'; break;
            case 'QAR': return 'ر.ق.‏'; break;
            case 'RON': return 'lei'; break;
            case 'RSD': return 'Din.'; break;
            case 'RUB': return 'р.'; break;
            case 'RWF': return 'RWF'; break;
            case 'SAR': return 'ر.س.‏'; break;
            case 'SEK': return 'kr'; break;
            case 'SGD': return '$'; break;
            case 'SYP': return 'ل.س.‏'; break;
            case 'THB': return '฿'; break;
            case 'TJS': return 'т.р.'; break;
            case 'TMT': return 'm.'; break;
            case 'TND': return 'د.ت.‏'; break;
            case 'TRY': return 'TL'; break;
            case 'TTD': return 'TT$'; break;
            case 'TWD': return 'NT$'; break;
            case 'UAH': return '₴'; break;
            case 'USD': return '$'; break;
            case 'UYU': return '$U'; break;
            case 'UZS': return 'so\'m'; break;
            case 'VEF': return 'Bs. F.'; break;
            case 'VND': return '₫'; break;
            case 'XOF': return 'XOF'; break;
            case 'YER': return 'ر.ي.‏'; break;
            case 'ZAR': return 'R'; break;
            case 'ZWL': return 'Z$'; break;
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
    static convertPrice(originalPrice, originalRate, targetRate) {
        let convertedPrice = (originalPrice / originalRate) * targetRate;

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
     * @return {string} e.g: "£100 (AUD $120)"
     */
    static buildPriceText(originalPrice, originalCurrency, targetCurrency, originalRate, targetRate) {
        // if currency the same, simply return with original currency
        if (originalCurrency === targetCurrency) {
            return this.currencyToSign(originalCurrency) + originalPrice;
        }

        return this.currencyToSign(targetCurrency) + this.convertPrice(originalPrice, originalRate, targetRate) +
            '  <span class="original-price">(' + originalCurrency + ' ' + this.currencyToSign(originalCurrency) + originalPrice + ')<span>';
    }

    /**
     * Get exchange rate
     *
     * @param {string} endpoint
     * @param {string} originalCurrency
     * @param {string} targetCurrency
     * @return {Promise}
     */
    getExchangeRate(endpoint, originalCurrency, targetCurrency) {
        return Axios.post(
            endpoint,
            {
                'fromCurrency': originalCurrency,
                'toCurrency': targetCurrency
            }
        );
    }
}