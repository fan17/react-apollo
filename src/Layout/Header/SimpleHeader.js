import React from 'react';
import { NavLink } from 'react-router-dom';

const SimpleHeader = () => {
    return (
        <header>
            <NavLink to="/">
                <span role="img" aria-label="home">
                    🚀
                </span>
            </NavLink>
        </header>
    );
};

export default SimpleHeader;
