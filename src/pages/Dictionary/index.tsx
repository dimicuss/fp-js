import * as React from 'react';
import { Code } from '@/components/Code';
import { HeaderOne } from '@/components/HeaderOne';
import { Paragraph } from '@/components/Paragraph';
import { HeaderThree } from '@/components/HeaderThree';

import dictionaries from '!!raw-loader!./examples/dictionaries';
import handleDictionaries from '!!raw-loader!./examples/handleDictionaries';



export const Dictionary = React.memo(() => {
    return <div>
        <HeaderOne>Словари</HeaderOne>
        <Paragraph>Необходимо преобразовать словарь с данными по сроку кредита по примеру входных и выходных данных.</Paragraph>
        <HeaderThree>Входные и выходные данные:</HeaderThree>
        <Code>{dictionaries}</Code>
        <HeaderThree>Решение:</HeaderThree>
        <Code>{handleDictionaries}</Code>
    </div>
})