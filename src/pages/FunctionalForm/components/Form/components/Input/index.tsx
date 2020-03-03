import React from 'react';
import { path } from 'ramda'
import { FieldHoc } from '@/hoc/FieldHoc';




class InputComponent extends React.PureComponent {
    render() {
        return <input type="text" {...this.props} />
    }
}


export const Input = FieldHoc({
    path: ['sdasdasd'],
    getValue: path<string>(['target', 'value'])
})(InputComponent);
