import * as React from 'react';
import { Code } from '@/components/Code';
import { HeaderOne } from '@/components/HeaderOne';
import { HeaderTwo } from '@/components/HedaerTwo';
import { Paragraph } from '@/components/Paragraph';

import composition from '!!raw-loader!./examples/composition'


export const Composition: React.FC = React.memo(() => (
    <div>
        <HeaderOne>Композиция</HeaderOne>
        <Paragraph>
            Композиция - представляет собой последовательное изменение какого либо аргумента через набор функций.
        </Paragraph>
        <Code>{composition}</Code>
    </div>
))