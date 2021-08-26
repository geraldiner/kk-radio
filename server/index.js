const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const ACNHAPI = require("./datasources/acnh");
require("dotenv").config();
console.log(process.env.PORT);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			acnhAPI: new ACNHAPI(),
		};
	},
});

server.listen(
	process.env.PORT,
	console.log(`
    🚀 Server ready at http://localhost:${process.env.PORT}
  `),
);
