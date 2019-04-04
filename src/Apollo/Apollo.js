import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

export const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
});

const Apollo = props => (
    <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default Apollo;
