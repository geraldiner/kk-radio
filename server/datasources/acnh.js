const { RESTDataSource } = require("apollo-datasource-rest");
const { PLAYLISTS, TITLE_TO_ID } = require("../constants/records");

class ACNHAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://acnhapi.com/v1/";
	}

	async getSong(id, title) {
		try {
			if (title) {
				id = TITLE_TO_ID[title];
			}
			const response = await this.get(`songs/${id}`);
			return {
				id: response.id,
				title: response.name["name-USen"],
				music_url: response.music_uri,
				image_url: response.image_uri,
			};
		} catch (error) {
			console.log(error);
		}
	}

	async getPlaylist(title) {
		const songNames = PLAYLISTS[title].songs;
		const songs = [];
		for (let i = 0; i < songNames.length; i++) {
			const song = await this.getSong(TITLE_TO_ID[songNames[i]]);
			song.color = PLAYLISTS[title].color;
			songs.push(song);
		}
		return songs;
	}
}

module.exports = ACNHAPI;
