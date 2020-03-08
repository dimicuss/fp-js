// map - принимает функцию-обработчик, массив и возвращает результирующий массив
export default function map(fn, items) {
    const result = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        result.push(fn(item));
    }

    return result;
}
