const { RESTDataSource } = require("apollo-datasource-rest");

class ACNHAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://acnhapi.com/v1/";
	}

	async getSong(id) {
		try {
			const response = await this.get(`songs/${id}`);
			console.log(response);
			return {
				id: response.id,
				name: response.name["name-USen"],
				music_url: response.music_uri,
				image_url: response.image_uri,
			};
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = ACNHAPI;
