import * as R from 'ramda';


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


// Функциональное решение
const getType = R.prop('type');
const getValue = R.prop('value');
const getTelephone = R.nthArg(1);
const getOtpTelephone = R.nthArg(0);

export const handleTelephonesFunctional = R.pipe(
    R.mapAccum(
        R.pipe(
            R.applySpec({
                type: R.pipe(getTelephone, getType),
                otpTelephone: getOtpTelephone,
                handledTelephone: R.pipe(getTelephone, R.applySpec({
                    label: getValue,
                    value: getValue,
                })),
            }),
            R.juxt([
                R.ifElse(
                    R.pipe(getType, R.equals('Otp')),
                    R.prop('handledTelephone'),
                    R.prop('otpTelephone'),
                ),
                R.prop('handledTelephone'),
            ]),
        ),
        null,
    ),
    R.applySpec({
        otpTelephone: R.prop('0'),
        dropdownTelephones: R.pipe(R.prop('1'), R.uniqBy(getValue)),
    }),
);