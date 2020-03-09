import React from 'react';
import { codeStyle } from './codeStyle';
import SyntaxHighlighter from 'react-syntax-highlighter'


export const Code: React.FC = React.memo((props) => {
    return <SyntaxHighlighter language='javascript' {...props} style={codeStyle} />
});
