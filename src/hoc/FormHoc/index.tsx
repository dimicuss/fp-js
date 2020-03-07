import React, { useCallback, useState } from 'react';
import { assocPath } from 'ramda';

import { createHoc } from '@/lib/createHoc';

import { FormHocPropsType, FormStateType, FormContextType, FormPropsType } from './types';


const FormContext = React.createContext<FormContextType>(null);


const Form: React.FC<FormPropsType> = React.memo(({ Descendant, defaultFields = {}, onSubmit, ...otherProps }) => {
    const [state, setState] = useState<FormStateType>({
        fields: defaultFields,
    });


    const { fields } = state;


    const setFormField = useCallback((path: string[], value: any) => {
        setState({
            fields: assocPath(path, value, fields)
        });
    }, [fields]);


    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(fields);
    }, [fields]);


    const contextValue = {
        fields,
        setFormField,
    };


    return (
        <FormContext.Provider value={contextValue}>
            <Descendant handleSubmit={handleSubmit} {...otherProps} />
        </FormContext.Provider>
    );
});


export { FormContext };
export const FormHoc = createHoc<FormHocPropsType>(Form);
