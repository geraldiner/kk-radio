const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getSong(id: ID, title: String): Song
		getPlaylist(title: String!): [Song]
	}

	type Song {
		id: Int
		title: String
		color: String
		music_url: String
		image_url: String
	}
`;

module.exports = typeDefs;
