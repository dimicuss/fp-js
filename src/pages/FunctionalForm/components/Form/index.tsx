import React from 'react';

import { FormHoc } from '@/hoc/FormHoc';

import { Input } from './components/Input';
import { FormPropsTypes } from './types';


class FormComponent extends React.PureComponent<FormPropsTypes> {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Input />
            </form>
        );
    }
}


export const Form = FormHoc(FormComponent);
