import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class RocketListItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    render() {
        const { name, description } = this.props;
        return (
            <div>
                <Link className="link" to="/rockets">
                    Back to list
                </Link>
                <div
                    style={{
                        width: '100%',
                        margin: '2em 0',
                        display: 'flex',
                        flex: 'row nowrap'
                    }}
                >
                    <div
                        style={{
                            width: '50%',
                            borderRadius: '15px 0 0 15px',
                            backgroundSize: 'cover',
                            backgroundImage:
                                'url(https://scontent-frx5-1.cdninstagram.com/vp/e2b079108206809f6d6249fdde7379d4/5D00257F/t51.2885-15/e35/49422008_589541271474149_2696697032135736108_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&se=7&ig_cache_key=MTk2MzM2NjI0OTYzNTMwOTQ1Mg%3D%3D.2)'
                        }}
                    />
                    <div style={{ width: '50%', height: '100%' }}>
                        <h3
                            style={{
                                background: '#111',
                                padding: '1em 2em',
                                borderRadius: '0 15px 0 0',
                                color: '#fff'
                            }}
                        >
                            {name}
                        </h3>
                        <div
                            style={{
                                background: '#fff',
                                borderRadius: '0 0 15px 0',
                                padding: '1em 2em',
                                minHeight: '500px'
                            }}
                        >
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
