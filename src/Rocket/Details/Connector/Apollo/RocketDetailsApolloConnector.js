import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import RocketDetailsQuery from "./RocketDetailsQuery";

class RocketDetailsApolloConnector extends React.Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired
    };

    render() {
        const { children, id } = this.props;
        return (
            <Query query={RocketDetailsQuery} variables={{ id }}>
                {({ data, loading, error }) => {
                    try {
                        if (error) {
                            throw error;
                        }

                        let result = {
                            loading
                        };

                        if (!loading) {
                            result.rocket = data.rocket;
                        }

                        return children(result);
                    } catch (exception) {
                        throw exception;
                    }
                }}
            </Query>
        );
    }
}

export default RocketDetailsApolloConnector;
