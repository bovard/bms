var constants = require('./constants');


var DATA_TYPES = constants.DATA_TYPES;
var VALUES = constants.VALUES;


module.exports = {
    agewed: {
        key: 'agewed',
        yearStart: 1972,
        yearEnd: 1996,
        description: 'Age when first married',
        question: 'IF EVER MARRIED: How old were you when you first married?',
        data: {
            type: DATA_TYPES.NUMERIC_INTS,
            defined: {
                0: VALUES.NAP,
                98: VALUES.DK,
                99: VALUES.NA
            }

        }

    },
    divorce: {
        key: 'divorce',
        yearStart: 1972,
        yearEnd: 1996,
        description: 'Ever been divorced or separated',
        question: 'IF CURRENTLY MARRIED OR WIDOWED: Have you ever been divorced or legally separated?',
        data: {
            type: DATA_TYPES.NUMERIC,
            defined: {
                0: VALUES.NAP,
                1: VALUES.YES,
                2: VALUES.NO,
                8: VALUES.DK,
                9: VALUES.NA
            }

        }

    },
    widowed: {
        key: 'widowed',
        yearStart: 1972,
        yearEnd: 1996,
        description: 'Ever been widowed',
        question: 'IF CURRENTLY MARRIED, SEPARATED, OR DIVORCED: Have you ever been widowed?',
        data: {
            type: DATA_TYPES.NUMERIC,
            defined: {
                0: VALUES.NAP,
                1: VALUES.YES,
                2: VALUES.NO,
                8: VALUES.DK,
                9: VALUES.NA
            }

        }

    }
};