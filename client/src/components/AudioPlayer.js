import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

const AudioPlayer = ({ songs }) => {
	const [currIndex, setCurrIndex] = useState(0);
	const [songProgress, setSongProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	let currSong = songs[currIndex];

	const audioRef = useRef(new Audio(currSong.music_url));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;

	const toPrevSong = () => {
		if (currIndex - 1 < 0) {
			setCurrIndex(songs.length - 1);
		} else {
			setCurrIndex(currIndex - 1);
		}
	};

	const toNextSong = () => {
		if (currIndex < songs.length - 1) {
			setCurrIndex(currIndex + 1);
		} else {
			setCurrIndex(0);
		}
	};

	return (
		<>
			<div>
				<h3>{currSong.title}</h3>
				<img src={currSong.image_url} alt={`Song artwork for ${currSong.title}`} />
				<audio src={currSong.music_url}></audio>
			</div>
			<AudioControls isPlaying={isPlaying} onNextClick={toNextSong} onPrevClick={toPrevSong} />
		</>
	);
};

export default AudioPlayer;
