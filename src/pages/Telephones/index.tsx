import React from 'react';
import { HeaderOne } from '@/components/HeaderOne';
import { HeaderTwo } from '@/components/HedaerTwo';
import { Paragraph } from '@/components/Paragraph';
import { Code } from '@/components/Code';

import telephones from './examples/telephones.raw'
import handleTelephones from './examples/handleTelephones'



export const Telephones = React.memo(() => (
    <div>
        <HeaderOne>Преобразование данных из телефонной книги</HeaderOne>
        <Paragraph>
            Необходимо отобразить данные в набор селектов для дропдауна
            (react-select), на выходе множество селектов должно быть уникальм, так же нужно пределить дефолтный селект по типу телефона.
        </Paragraph>
        <HeaderTwo>Входные и выходные данные:</HeaderTwo>
        <Code>{telephones}</Code>
        <HeaderTwo>Решение:</HeaderTwo>
        <Code>{handleTelephones}</Code>
    </div>
))