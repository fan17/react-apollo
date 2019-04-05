import React from 'react';
import { Link } from 'react-router-dom';

export default class SimpleHeader extends React.Component {
    render() {
        return (
            <header
                style={{
                    height: '75px',
                    width: '100%',
                    backgroundColor: '#111',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        width: '960px',
                        padding: '0 2em',
                        backgroundPosition: 'right'
                    }}
                >
                    <Link to="/">
                        <img
                            src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"
                            alt="logo"
                        />
                    </Link>
                </div>
            </header>
        );
    }
}
