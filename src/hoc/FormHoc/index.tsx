import React from 'react';
import { assocPath } from 'ramda';

import { createHoc } from '@/lib/createHoc';

import { FormHocPropsType, FormStateType, FormContextType, FormPropsType } from './types';


const FormContext = React.createContext<FormContextType>(null);


class Form extends React.PureComponent<FormPropsType, FormStateType> {
    state = {
        fields: {}
    };


    setFormField = (path: string[], value: any) => {
        this.setState({
            fields: assocPath(path, value, this.state.fields)
        })
    };


    render() {
        const { fields } = this.state;
        const { Descendant, ...otherProps } = this.props;
        const contextValue = {
            fields,
            setFormField: this.setFormField,
        };

        return (
            <FormContext.Provider value={contextValue}>
                <Descendant {...otherProps} />
            </FormContext.Provider>
        )
    }
}

export { FormContext };
export const FormHoc = createHoc<{}>(Form);
