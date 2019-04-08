import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Layout/Form/Form';
import SubmitButton from '../Layout/Form/SubmitButton';

export default class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = this.getEmptyState();
    }

    getEmptyState = () => ({
        name: '',
        message: ''
    });

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.getEmptyState());
    };

    render() {
        return (
            <div>
                <h1>ContactForm</h1>
                <Form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            name="name"
                            value={this.state.name}
                            onChange={event =>
                                this.setState({ name: event.target.value })
                            }
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            onChange={event =>
                                this.setState({ message: event.target.value })
                            }
                            value={this.state.message}
                        />
                    </div>
                    <SubmitButton />
                </Form>
            </div>
        );
    }
}
