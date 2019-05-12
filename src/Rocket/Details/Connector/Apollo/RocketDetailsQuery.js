import gql from 'graphql-tag';
export default gql`
    query RocketDetails($id: ID!) {
        rocket(id: $id) {
            name
            description
        }
    }
`;
