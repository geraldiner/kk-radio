import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";
import AudioPlayer from "./AudioPlayer";
import { PLAYLISTS } from "./constants/records";

const Radio = () => {
	const { title } = useParams();

	const PlaylistQuery = gql`
		query getPlaylist($title: String!) {
			getPlaylist(title: $title) {
				title
				music_url
				image_url
			}
		}
	`;

	const { loading, error, data } = useQuery(PlaylistQuery, { variables: { title } });
	const songs = data?.getPlaylist;

	return (
		<>
			<Loading className="w-full p-3 rounded-t-md bg-white" loading={loading} />
			{error && `Error! ${error.message}`}
			{songs && (
				<div className="">
					<p>The playlist chosen is: {PLAYLISTS[title].title}</p>
					<AudioPlayer songs={songs} />
				</div>
			)}
		</>
	);
};

export default Radio;
