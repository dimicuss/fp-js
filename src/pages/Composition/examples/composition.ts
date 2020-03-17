import * as R from 'ramda';


const concatEnd = R.flip(R.concat); // Сделаем реверс аргументов concat, тем самым создадим функцию для добавления строки в конец другой строки
const appendA = concatEnd('A'); // Определим 3 функции с начальными аргументами
const appendB = concatEnd('B');
const appendC = concatEnd('C');


// Создадим композицию из выше перечисленных функций.
const naturalComposition = R.compose(appendC, appendB, appendA);

const reversedComposition = R.pipe( // аналог композиции, но с измененным порядком передачи аргумента
    appendA,
    appendB,
    appendC,
);

naturalComposition('First Arg '); // => "FirstArg ABC"
appendB(appendB(appendA('First Arg '))); // => "FirstArg ABC" (эквивалент)
reversedComposition('First Arg '); // => "FirstArg ABC"
