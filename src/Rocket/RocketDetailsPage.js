import React from 'react';
import { Query } from 'react-apollo';
import RocketQuery from './RocketQuery';
import Rocket from './Rocket';

const RocketDetailsPage = ({ match }) => {
    return (
        <Query query={RocketQuery} variables={{ id: match.params.id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (
                    <Rocket
                        name={data.rocket.name}
                        description={data.rocket.description}
                    />
                );
            }}
        </Query>
    );
};

export default RocketDetailsPage;
