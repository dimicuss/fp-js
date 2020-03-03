export interface FieldAdditionalPropsType {
    path: string[]
    getValue: (...any: anyp[]) => any
}



export interface FieldPropsType extends FieldAdditionalPropsType {
    Descendant: React.ComponentType<any>
}
