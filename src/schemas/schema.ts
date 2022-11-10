import { gql } from 'apollo-server-core';

export const typeDefs = gql`
    extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

    type User {
        id: Int!
        name: String
        email: String!
    }

    type Query {
        user(id: Int): User
    }
`;
