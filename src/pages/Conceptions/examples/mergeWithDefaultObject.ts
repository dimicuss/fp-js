// mergeWithDefaultObject - принимает дефолтный объект и возвращает функцию,
// которая сливает дефолтный объект с вновь передаваемым.
export default function mergeWithDefaultObject(defaultObj) {
    return function merge(obj) {
        return {
            ...defaultObj,
            ...obj,
        }
    }
}

mergeWithDefaultObject(
    {
        a: 'a',
        b: 'b',
        c: 'c',
    }
)(
    {
        d: 'd',
        e: 'e',
        f: 'f',
    }
);
