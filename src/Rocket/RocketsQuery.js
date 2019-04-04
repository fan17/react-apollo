import gql from 'graphql-tag';
export default gql`
    {
        rockets {
            id
            name
            active
            description
        }
    }
`;
