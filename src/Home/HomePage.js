import React from 'react';
import logo from '../logo.svg';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Query
                    query={gql`
                        {
                            rockets {
                                name
                                id
                            }
                        }
                    `}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.rockets.map(({ id, name }) => (
                            <div key={id}>
                                <p>
                                    {id}: {name}
                                </p>
                            </div>
                        ));
                    }}
                </Query>
            </header>
        </div>
    );
};

export default HomePage;
