import * as R from 'ramda';


const concatEnd = R.flip(R.concat); // Сделаем реверс аргументов concat, тем самым создадим функцию для добавления строки в конец другой строки
const appendA = concatEnd('A'); // Определим 3 функции с начальными аргументами
const appendB = concatEnd('B');
const appendC = concatEnd('C');


const naturalComposition = R.compose(appendC, appendB, appendA); // Создадим композицию из выше перечисленных функций.
const reversedComposition = R.pipe(appendA, appendB, appendC);  // аналог композиции, но с измененным порядком передачи аргумента


naturalComposition('Initial Arg '); // => "Initial Arg ABC"
appendB(appendB(appendA('Initial Arg '))); // => "Initial Arg ABC" (эквивалент)
reversedComposition('Initial Arg '); // => "Initial Arg ABC"
