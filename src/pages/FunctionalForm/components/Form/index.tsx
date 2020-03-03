import React from 'react';
import { path } from 'ramda';

import { FormHoc } from '@/hoc/FormHoc';
import { FieldHoc } from '@/hoc/FieldHoc';

import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
import { FormPropsTypes } from './types';




const InputField = FieldHoc({
    path: ['input'],
    getValue: path(['target', 'value']),
})(Input);


const TextareaField = FieldHoc({
    path: ['textarea'],
    getValue: path(['target', 'value']),
})(Textarea);



class FormComponent extends React.PureComponent<FormPropsTypes> {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <InputField />
                <TextareaField />
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export const Form = FormHoc(FormComponent);
