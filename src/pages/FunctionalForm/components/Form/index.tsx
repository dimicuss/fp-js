import React from 'react';
import { path } from 'ramda';

import { FormHoc } from '@/hoc/FormHoc';
import { FieldHoc } from '@/hoc/FieldHoc';

import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
import { FormPropsTypes } from './types';
import { styles } from './styles'


const getValue = path(['target', 'value']);


const InputField = FieldHoc({
    path: ['input'],
    getValue,
})(Input);


const TextareaField = FieldHoc({
    path: ['textarea'],
    getValue,
})(Textarea);



const FormComponent: React.FC<FormPropsTypes> = React.memo(({ handleSubmit }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputField />
            <TextareaField />
            <button type="submit">Submit</button>
        </form>
    );
});


export const Form = FormHoc(FormComponent);
