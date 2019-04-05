import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const style = {
    menuLink: {
        padding: '0 2em',
        color: '#eee',
        textDecoration: 'none',
        textTransform: 'uppercase'
    }
};

export default class FullHeader extends React.Component {
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
                    <NavLink style={style.menuLink} to="/rockets">
                        Rockets
                    </NavLink>
                    <NavLink style={style.menuLink} to="/contact">
                        Contact
                    </NavLink>
                </div>
            </header>
        );
    }
}
