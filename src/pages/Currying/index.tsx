import React from 'react';
import sum from './examples/sum.raw';


export const Currying = React.memo(() => {
    return (
        <div>
            <h1>Каррирование</h1>
            <p>
                Каррирование - это процесс разбиения функции с n аргументами на n вызовов.
            </p>
            <h3>Пример:</h3>
            <pre>{sum}</pre>
        </div>
    );
});