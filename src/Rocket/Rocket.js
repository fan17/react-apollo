import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rocket extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    render() {
        const { name, description } = this.props;
        return (
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        );
    }
}
