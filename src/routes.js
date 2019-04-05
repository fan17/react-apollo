import React from 'react';
import FullHeader from './Layout/Header/FullHeader';
import SimpleHeader from './Layout/Header/SimpleHeader';
import Hero from './Layout/Hero';
import HomePage from './Home/HomePage';
import RocketsPage from './Rocket/RocketsPage';
import RocketDetailsPage from './Rocket/RocketDetailsPage';
import ContactPage from './Contact/ContactPage';

const routes = [
    {
        path: '/',
        exact: true,
        header: () => (
            <>
                <FullHeader />
                <Hero img="https://home.bt.com/images/4-aerospace-firms-that-could-rival-spacex-and-launch-humans-into-space-136424900977002601-180207175048.jpg" />
            </>
        ),
        main: () => <HomePage />
    },
    {
        path: '/rockets',
        exact: true,
        header: () => <FullHeader />,
        main: () => <RocketsPage />
    },
    {
        path: '/rockets/:id',
        exact: true,
        header: () => <FullHeader />,
        main: props => <RocketDetailsPage id={props.match.params.id} />
    },
    {
        path: '/contact',
        exact: true,
        header: () => <SimpleHeader />,
        main: () => <ContactPage />
    }
];

export default routes;
