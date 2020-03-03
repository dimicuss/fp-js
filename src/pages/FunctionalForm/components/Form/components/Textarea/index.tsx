import React from 'react';


export const Textarea: React.FC = React.memo((props) => {
    return <textarea {...props} />
});


Textarea.defaultProps = {
    value: ''
};