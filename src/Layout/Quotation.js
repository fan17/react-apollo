import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hero extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };

    render() {
        const { text, author } = this.props;
        return (
            <div
                style={{
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                <p style={{ fontSize: '24px' }}>{text}</p>
                <p style={{ color: '#999', fontSize: '16px' }}>~{author}</p>
            </div>
        );
    }
}
