import React from 'react';

import { Form } from './components/Form';


export class FunctionalForm extends React.PureComponent {
    handleSubmit = (rest) => {
        console.log(rest)
    };


    render() {
        return <Form onSubmit={this.handleSubmit} />
    }
}