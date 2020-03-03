export interface FieldAdditionalPropsType {
    path: string[]
    getValue: (...any: any[]) => any
}



export interface FieldPropsType extends FieldAdditionalPropsType {
    Descendant: React.ComponentType<any>
}
