import React from 'react';
import { Query } from 'react-apollo';
import RocketsQuery from './RocketsQuery';
import RocketList from './RocketList';
import RocketListItem from './RocketListItem';

const RocketsPage = () => {
    return (
        <Query query={RocketsQuery}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (
                    <RocketList
                        count={data.rockets.length}
                        availableCount={
                            data.rockets.filter(rocket => rocket.active).length
                        }
                    >
                        {data.rockets.map(({ id, name, description }) => (
                            <RocketListItem
                                key={id}
                                id={id}
                                name={name}
                                description={description}
                            />
                        ))}
                    </RocketList>
                );
            }}
        </Query>
    );
};

export default RocketsPage;
