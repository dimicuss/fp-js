import * as R from 'ramda';


function concatEntry(entry) {
    return `${entry.join('=')};`;
}


export default function createCookie(obj) {
    return Object
        .entries(obj)
        .map(concatEntry)
        .join(' ');
}


// Функциональное решение
const concatEnd = R.flip(R.concat);

export const createCookieFunctional = R.pipe(
    R.toPairs,
    R.map(
        R.pipe(R.join('='), concatEnd(';'))
    ),
    R.join(' '),
);
