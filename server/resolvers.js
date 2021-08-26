const resolvers = {
	Query: {
		getSong: (_, { id }, { dataSources }) => {
			return dataSources.acnhAPI.getSong(id);
		},
	},
};

module.exports = resolvers;
