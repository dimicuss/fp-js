import * as R from 'ramda';
import { ensureStringObj } from 'typestyle/lib/internal/formatting';

function handleTelephone([otpTelephone, handledTelephones], { value, type }) {
    const handledTelephone = {
        label: value,
        value,
    };

    return [
        type === 'Otp' ? handledTelephone : otpTelephone,
        [...handledTelephones, handledTelephone],
    ]
}

function isValuesEqual({ value  }) {
    return value === this;
}

function isUniqueByValue({ value }, i, telephones) {
    return telephones.findIndex(isValuesEqual, value) === i;
}

export default function handleTelephones(telephones) {
    const [otpTelephone, dropdownTelephones] = telephones.reduce(handleTelephone, [null, []]);

    return {
        otpTelephone,
        dropdownTelephones: dropdownTelephones.filter(isUniqueByValue),
    }
}




export const handleTelephonesFunctional = R.pipe(
    R.mapAccum(R.pipe(
        R.applySpec({
            type: R.pipe(R.nthArg(1), R.prop('type')),
            otpTelephone: R.nthArg(0),
            handledTelephone: R.pipe(R.nthArg(1), R.applySpec({
                label: R.prop('value'),
                value: R.prop('value'),
            })),
        }),
        R.juxt([
            R.ifElse(
                R.pipe(R.prop('type'), R.equals('Otp')),
                R.prop('handledTelephone'),
                R.prop('otpTelephone'),
            ),
            R.prop('handledTelephone'),
        ]),
    ), null),
    R.applySpec({
        otpTelephone: R.prop('0'),
        dropdownTelephones: R.pipe(R.prop('1'), R.uniqBy(R.prop('value'))),
    }),
);