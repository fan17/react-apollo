import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hero extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired
    };

    render() {
        const { img } = this.props;
        return (
            <div
                style={{
                    width: '100%',
                    minHeight: '750px',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
        );
    }
}
