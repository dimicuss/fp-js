import React from 'react';
import { HeaderOne } from '@/components/HeaderOne';
import { HeaderThree } from '@/components/HeaderThree';
import { Paragraph } from '@/components/Paragraph';
import { Code } from '@/components/Code';

import telephones from '!!raw-loader!./examples/telephones'
import handleTelephones from '!!raw-loader!./examples/handleTelephones'



export const Telephones = React.memo(() => (
    <div>
        <HeaderOne>Преобразование данных из телефонной книги</HeaderOne>
        <Paragraph>
            Необходимо отобразить данные в набор селектов для дропдауна
            (react-select), на выходе множество селектов должно быть уникальм, так же нужно пределить дефолтный селект по типу телефона.
        </Paragraph>
        <HeaderThree>Входные и выходные данные:</HeaderThree>
        <Code>{telephones}</Code>
        <HeaderThree>Решение:</HeaderThree>
        <Code>{handleTelephones}</Code>
    </div>
))