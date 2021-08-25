import React, { useEffect, useSongs } from "react";
import { PLAYLISTS, TITLE_TO_ID } from "./constants/records";

const SongList = ({ mood }) => {
	const songs = PLAYLISTS[mood];
	return (
		<>
			<ul className="songlist bg-white rounded-md border-2 p-4 overscroll-contain max-h-64 overflow-y-auto">
				{songs.map((s, i) => {
					return <li key={i}>{s}</li>;
				})}
			</ul>
		</>
	);
};

export default SongList;
