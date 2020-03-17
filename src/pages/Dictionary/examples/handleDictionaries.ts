import * as R from 'ramda';


const getTerm = R.applySpec({
    value: R.identity,
    label: R.pipe(
        R.toString,
        R.flip(R.concat)(' месяцев')
    ),
});


const isDivides = ({ step }) => (value) => value % step === 0;
const countNextValue = ({ maxTerm, step }) => (i) => maxTerm - step * i;

export const getTerms = R.pipe(
    R.converge(R.filter, [isDivides,
        R.converge(R.times, [countNextValue,
            R.converge(
                R.pipe(R.divide, R.dec),
                [R.prop('maxTerm'), R.prop('step')]),
        ]),
    ]),
    R.map(getTerm),
);


export const handleDictionaries = R.evolve({
    uaProducts: R.pipe(
        R.groupBy(R.prop('productType')),
        R.mapObjIndexed(R.pipe(R.map(getTerms), R.flatten)),
    ),
});
