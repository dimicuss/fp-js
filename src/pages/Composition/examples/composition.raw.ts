import * as R from 'ramda';


const concatStart = R.flip(R.concat); // Определим функцию для сложения 2 срок, при этом последнй аргумент будет добавляться в начало строки
const addA = concatStart('A'); // Определим 3 функции с начальными аргументами
const addB = concatStart('B');
const addC = concatStart('C');


const naturalComposition = R.compose( // Создадим композицию из выше перечисленных функций.
    addA,
    addB,
    addC,
);

const reversedComposition = R.pipe( // аналог композиции, но с измененным порядком передачи аргумента
    addA,
    addB,
    addC,
);

naturalComposition('') // => CBA
addA(addB(addC(''))); // => CBA (эквивалент)
reversedComposition(''); // => ABC
