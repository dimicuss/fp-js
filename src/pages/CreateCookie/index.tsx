import * as React from 'react';
import { Code } from '@/components/Code';
import { HeaderOne } from '@/components/HeaderOne';
import { HeaderTwo } from '@/components/HedaerTwo';
import { Paragraph }from '@/components/Paragraph';

import cookie from '!!raw-loader!./examples/cookie'
import createCookie from '!!raw-loader!./examples/createCookie'


export const CreateCookie = React.memo(() => (
    <div>
        <HeaderOne>Создание cookie строки</HeaderOne>
        <Paragraph>Необходимо сериализовать объект по cookie спецификации (a=A; b=B; ...)</Paragraph>
        <HeaderTwo>Входные и выходные данные:</HeaderTwo>
        <Code>{cookie}</Code>
        <HeaderTwo>Решение:</HeaderTwo>
        <Code>{createCookie}</Code>
    </div>
));