const resolvers = {
	Query: {
		getSong: (parent, args, { dataSources }) => {
			return "songs";
		},
		getPlaylist: (parent, args, { dataSources }) => {
			return "playlists";
		},
	},
};

module.exports = resolvers;
