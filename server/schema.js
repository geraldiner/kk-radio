const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getSong(id: ID!): Song
	}

	type Song {
		id: Int
		name: String
		music_url: String
		image_url: String
	}
`;

module.exports = typeDefs;
