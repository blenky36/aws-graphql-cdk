import { ApolloServer, gql } from 'apollo-server-lambda'

const typeDefs = gql`
    type Query {
        hello: String
    }
`
const resolvers = {
    Query: {
        hello: () => 'Hello from the CDK and typescript lambda!'
    }
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  introspection: true,
})

export const handler = server.createHandler()
