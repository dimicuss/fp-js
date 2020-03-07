export interface Fields {
    [key: string]: any
}


export interface FormHocPropsType {
    onSubmit: (fields: Fields) => void
    defaultFields?: Fields
}

export interface FormStateType {
    fields: Fields
}

export interface FormPropsType extends FormHocPropsType {
    Descendant: React.ComponentType<any>
}

export interface FormContextType extends FormStateType {
    setFormField: (path: string[], value: any) => void
}