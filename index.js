import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// types
import { typeDefs } from "./schema.js";
//resolver
import { resolvers } from "./resolvers.js";

const PORT = 8080;

// server setup
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: PORT },
});

console.log(`Server running at: ${url}`);
