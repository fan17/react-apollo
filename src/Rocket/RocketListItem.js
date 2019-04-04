import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class RocketListItem extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    render() {
        const { id, name, description } = this.props;
        return (
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/rockets/${id}`}>go to details</Link>
            </div>
        );
    }
}
