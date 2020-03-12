import * as R from 'ramda';


function concatEntry(entry) {
    return entry.join('=');
}


function createCookie(obj) {
    return `${
        Object
            .entries(obj)
            .map(concatEntry)
            .join('; ')
    };`;
}


export const createCookieFunctional = R.pipe(
    R.toPairs,
    R.map(R.join('=')),
    R.join('; '),
    cookie => `${cookie};`, // R.flip(R.concat),
);
