import React from 'react';
import { HeaderOne } from '@/components/HeaderOne';
import { HeaderThree } from '@/components/HeaderThree';
import { Paragraph } from '@/components/Paragraph';
import { Code } from '@/components/Code';

import sum from './examples/sum';


export const Currying = React.memo(() => {
    return (
        <div>
            <HeaderOne>Каррирование</HeaderOne>
            <Paragraph>
                Каррирование - это процесс разбиения функции с n аргументами на n вызовов.
            </Paragraph>
            <HeaderThree>Пример:</HeaderThree>
            <Code>{sum}</Code>
        </div>
    );
});