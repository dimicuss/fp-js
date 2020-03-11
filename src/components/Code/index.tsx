import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'

import { codeStyle } from './codeStyle';


export const Code: React.FC = React.memo((props) => {
    return <SyntaxHighlighter language='javascript' {...props} style={codeStyle} />
});
