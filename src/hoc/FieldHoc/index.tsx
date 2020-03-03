import React from 'react';
import { path as ramdaPath } from 'ramda';

import { FormContext } from '@/hoc/FormHoc';
import { FormContextType } from '@/hoc/FormHoc/types';

import { createHocWithProps } from '@/lib/createHocWithProps';

import { FieldPropsType, FieldAdditionalPropsType } from './types';




class Field extends React.PureComponent<FieldPropsType> {
    context: FormContextType;


    handleChange = (event) => {
        const { getValue, path } = this.props;
        const { setFormField } = this.context;
        setFormField(path, getValue(event));
    };


    render() {
        const { Descendant, path, getValue, ...otherProps } = this.props;
        const { fields } = this.context;
        return <Descendant {...otherProps} value={ramdaPath(path, fields)} onChange={this.handleChange} />
    }
}


Field.contextType = FormContext;


export const FieldHoc = createHocWithProps<{}, FieldAdditionalPropsType>(Field);
