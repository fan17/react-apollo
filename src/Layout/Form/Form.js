import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        children: PropTypes.node
    };

    render() {
        const { onSubmit, children } = this.props;
        return (
            <form className="form" onSubmit={onSubmit}>
                {children}
            </form>
        );
    }
}
