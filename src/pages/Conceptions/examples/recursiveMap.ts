// recursiveMap - рекурсивно принимает функцию-обработчик, массив и возвращает результирующий массив
export default function recursiveMap(fn, items, result = [], i = 0) {
    if(i < items.length) {
        result.push(fn(items[i]));
        return recursiveMap(fn, items, result, i + 1);
    }

    return result;
}
