import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import RocketsPage from '../Rocket/RocketsPage';
import ContactPage from '../Contact/ContactPage';
import Error404Page from '../Error/Error404Page';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/rockets" component={RocketsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={Error404Page} />
            </Switch>
        </main>
    );
};

export default Main;
