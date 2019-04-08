import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink style={style.menuLink} to="/">
                        <span
                            style={{ fontSize: '32px' }}
                            role="img"
                            aria-label="home"
                        >
                            🚀
                        </span>
                    </NavLink>
                    <NavLink style={style.menuLink} to="/rockets">
                        SpaceX
                    </NavLink>
                    <NavLink style={style.menuLink} to="/contact">
                        Contact
                    </NavLink>
                </div>
            </header>
        );
    }
}
