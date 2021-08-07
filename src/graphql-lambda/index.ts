import { ApolloServer, gql } from 'apollo-server-lambda'

const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`

const resolvers = {
    Query: {
        helloWorld: () => 'Hello World from CDK and AWS Lambda!'
    }
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  introspection: true,
});

export const handler = server.createHandler();