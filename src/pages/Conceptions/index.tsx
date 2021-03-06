import React from 'react';

import { Code } from '@/components/Code'
import { HeaderOne } from '@/components/HeaderOne';
import { HeaderTwo } from '@/components/HeaderTwo';
import { HeaderThree } from '@/components/HeaderThree';
import { Paragraph } from '@/components/Paragraph';

import map from '!!raw-loader!./examples/map';
import pureFunction from '!!raw-loader!./examples/sum'
import recursiveMap from '!!raw-loader!./examples/recursiveMap';
import createDirtyFunction from '!!raw-loader!./examples/dirtyFunction';
import mergeWithDefaultObject from '!!raw-loader!./examples/mergeWithDefaultObject';


export const Conceptions: React.FC = React.memo(() => {
    return (
        <div>
            <HeaderOne>Основные коцепции ФП</HeaderOne>
            <HeaderTwo>Чистые функции</HeaderTwo>
            <Paragraph>
                Чистая функция - функция, которая является детерминированной и не имеет побочных эффектов.
            </Paragraph>
            <HeaderThree>Пример:</HeaderThree>
            <Code>{pureFunction}</Code>
            <HeaderThree>Контрпример:</HeaderThree>
            <Code>{createDirtyFunction}</Code>
            <HeaderTwo>Функция высшего порядка</HeaderTwo>
            <Paragraph>
                Функция высшего порядка - функция принимающая в качестве аргумента или возвращающая другую функцию.
            </Paragraph>
            <HeaderThree>Пример:</HeaderThree>
            <Code>{map}</Code>
            <Code>{mergeWithDefaultObject}</Code>
            <HeaderTwo>Рекурсия</HeaderTwo>
            <Paragraph>
                Рекурсия - метод определения цикла через самовызов функции.
            </Paragraph>
            <HeaderThree>Пример:</HeaderThree>
            <Code>{recursiveMap}</Code>
        </div>
    );
});
