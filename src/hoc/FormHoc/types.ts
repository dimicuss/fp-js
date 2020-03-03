export interface FormHocPropsType {}

export interface FormStateType {
    fields: { [key: string]: any }
}

export interface FormPropsType extends FormHocPropsType {
    Descendant: React.ComponentType
}

export interface FormContextType extends FormStateType {
    setFormField: (path: string[], value: any) => void
}