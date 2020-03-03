import React from 'react';

import { FormHoc } from '@/hoc/FormHoc';

import { Input } from './components/Input';


interface DescendantProps {}

interface Props extends DescendantProps {}

class FormComponent extends React.PureComponent<Props> {
    render() {
        return (
            <form>
                <Input />
            </form>
        );
    }
}


export const Form = FormHoc<DescendantProps>(FormComponent);
