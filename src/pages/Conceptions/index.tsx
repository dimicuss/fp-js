import React from 'react';
import map from './examples/map.raw';
import pureFunction from './examples/sum.raw'
import recursiveMap from './examples/recursiveMap.raw';
import createDirtyFunction from './examples/dirtyFunction.raw';
import mergeWithDefaultObject from './examples/mergeWithDefaultObject.raw';


export const Conceptions = React.memo(() => {
    return (
        <div>
            <h1>Основные коцепции ФП</h1>
            <h2>Чистые функции</h2>
            <p>
                Чистая функция - функция, которая является детерминированной, и не имеет попобочных эффектов.
            </p>
            <h3>Пример:</h3>
            <pre>{pureFunction}</pre>
            <h3>Контрпример:</h3>
            <pre>{createDirtyFunction}</pre>
            <h2>Функция высшего порядка</h2>
            <p>
                Функция высшего порядка - функция принимающая в качестве аргумента или возвращающая другую функцию.
            </p>
            <h3>Пример:</h3>
            <pre>{map}</pre>
            <pre>{mergeWithDefaultObject}</pre>
            <h2>Рекурсия</h2>
            <p>
                Рекурсия - метод определения цикла через самовызов функции.
            </p>
            <h3>Пример:</h3>
            <pre>{recursiveMap}</pre>
        </div>
    );
});
