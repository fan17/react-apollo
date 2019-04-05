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
            <div
                style={{
                    width: '400px',
                    marginTop: '2em'
                }}
            >
                <h3
                    style={{
                        background: '#111',
                        padding: '1em 2em',
                        borderRadius: '15px 15px 0 0',
                        color: '#fff'
                    }}
                >
                    {name}
                </h3>
                <div
                    style={{
                        background: '#fff',
                        borderRadius: '0 0 15px 15px',
                        paddingRight: '2em',
                        paddingLeft: '2em',
                        paddingTop: '1em'
                    }}
                >
                    <p
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: '7',
                            WebkitBoxOrient: 'vertical',
                            minHeight: '125px',
                            overflow: 'hidden'
                        }}
                    >
                        {description}
                    </p>
                    <p
                        style={{
                            borderTop: '1px solid #eee',
                            marginTop: '1em',
                            padding: '1em 0',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Link className="link" to={`/rockets/${id}`}>
                            go to details
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}
