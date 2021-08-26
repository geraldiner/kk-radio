const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getSong: Song
		getPlaylist: [Song]
	}

	type Song {
		id: String
		name: String
		music_url: String
		image_url: String
	}
`;

module.exports = typeDefs;
