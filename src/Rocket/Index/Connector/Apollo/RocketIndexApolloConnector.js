import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import RocketIndexQuery from './RocketIndexQuery';

class RocketIndexApolloConnector extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <Query query={RocketIndexQuery}>
        {({ data, loading, error }) => {
          try {
            if (error) {
              throw error;
            }

            const result = {
              loading
            };

            if (!loading) {
              result.rockets = data.rockets;
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

export default RocketIndexApolloConnector;
