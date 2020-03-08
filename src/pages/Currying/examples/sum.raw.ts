import { curry, curryN } from 'ramda'


// Функция - сумматор
function sumFunction(a, b) {
    return a + b;
}

// Каррированный вариант сумматора
const sumRaw = curry(sumFunction);

// Поочередный вызов
sumRaw(1)(2); // => 10
// curry предоставляет возможность вызвать функцию как обычно
sumRaw(1, 2); // => 10

// Функция с неопределенным количеством аргументов
function enhancedSumFunction(...rest) {
    return rest.reduce(sumFunction);
}

// Каррированный вариант с фиксированным числом аргументов.
const enhancedSum = curryN(3, enhancedSumFunction);
enhancedSum(1)(2)(3); // => 6
enhancedSum(1, 2, 3); // => 6
