import * as React from 'react';
import { Code } from '@/components/Code';
import { HeaderOne } from '@/components/HeaderOne'
import { Paragraph }from '@/components/Paragraph'

import createCookie from './examples/createCookie.raw'


export const CreateCookie = React.memo(() => (
    <div>
        <HeaderOne>Создание cookie строки</HeaderOne>
        <Paragraph>Попробуем написать функциональный аналог createCookie</Paragraph>
        <Code>{createCookie}</Code>
    </div>
));