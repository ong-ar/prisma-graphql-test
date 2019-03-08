const { prisma } = require("./generated/prisma-client");
import { GraphQLServer } from "graphql-yoga";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type User {
      id: String!
      name: String!
  }

  type Subscription {
    Users: User
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  },
  Subscription: {
    Users: {
      subscribe: async (_, __) =>
        await prisma.$subscribe
          .user({
            AND: [{ mutation_in: ["CREATED"] }]
          })
          .node(),
      resolve: payload => payload
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
