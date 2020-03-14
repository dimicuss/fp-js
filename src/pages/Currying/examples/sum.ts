import { curry, curryN } from 'ramda'


// Функция сумматор
function rawSum(a, b) {
    return a + b;
}

// Каррированный вариант сумматора
const sum = curry(rawSum);

// Поочередный вызов
sum(1)(2); // => 10
// curry предоставляет возможность вызвать функцию как обычно
sum(1, 2); // => 10

// Функция с неопределенным количеством аргументов
function rawEnhancedSum(...rest) {
    return rest.reduce(rawSum);
}

// Каррированный вариант с фиксированным числом аргументов.
const enhancedSum = curryN(3, rawEnhancedSum);
enhancedSum(1)(2)(3); // => 6
enhancedSum(1, 2, 3); // => 6


export default enhancedSum;