import React from 'react';


export const Input: React.FC = React.memo((props) => {
    return <input type="text" {...props} />
});
