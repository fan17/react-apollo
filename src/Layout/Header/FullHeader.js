import React from 'react';
import { NavLink } from 'react-router-dom';

const FullHeader = () => {
    return (
        <header>
            <NavLink to="/">🚀</NavLink>
            <NavLink to="/rockets">Rockets</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </header>
    );
};

export default FullHeader;
