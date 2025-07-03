const resolvers = {
	Query: {
		getSong: (_, { id, title }, { dataSources }) => {
			return dataSources.acnhAPI.getSong(id, title);
		},
		getPlaylist: (_, { title }, { dataSources }) => {
			return dataSources.acnhAPI.getPlaylist(title);
		},
	},
};

module.exports = resolvers;
