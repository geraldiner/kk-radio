import { gql } from "@apollo/client";
export const getPlaylistQuery = title => {
	return gql`
		query Query {
			getPlaylist(title: title) {
				title
				color
				music_url
				image_url
			}
		}
	`;
};
