import React, {useCallback, useContext} from 'react';
import { path as ramdaPath } from 'ramda';

import { FormContext } from '@/hoc/FormHoc';
import { createHocWithProps } from '@/lib/createHocWithProps';

import { FieldPropsType, FieldAdditionalPropsType } from './types';


const Field: React.FC<FieldPropsType> = React.memo(({ Descendant, path, getValue, ...otherProps }) => {
    const { fields, setFormField } = useContext(FormContext);

    const handleChange = useCallback((event) => {
        setFormField(path, getValue(event));
    }, [setFormField]);

    return <Descendant {...otherProps} value={ramdaPath(path, fields)} onChange={handleChange} />

});


export const FieldHoc = createHocWithProps<{}, FieldAdditionalPropsType>(Field);
