import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SimpleHeader from './Header/SimpleHeader';
import FullHeader from './Header/FullHeader';

const Header = () => {
    return (
        <header>
            <Switch>
                <Route path="/contact" component={SimpleHeader} />
                <Route component={FullHeader} />
            </Switch>
        </header>
    );
};

export default Header;
