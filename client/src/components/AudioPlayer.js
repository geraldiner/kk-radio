import React, { useState, useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import AudioControls from "./AudioControls";
import { MOODS } from "./constants/records";

const GetPlaylistQuery = gql`
	query Query {
		getPlaylist(name: String) {
			name
			music_url
			image_url
		}
	}
`;

const AudioPlayer = ({ mood }) => {
	console.log(MOODS);
	const { data, loading, err } = useQuery(GetPlaylistQuery);
	const songs = data?.getPlaylist;
	const [songIndex, setSongIndex] = useState(0);
	const [songProgress, setSongProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const { name, musicUrl, imageUrl } = songs[songIndex];
	const audioRef = useRef(new Audio(musicUrl));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;
	const toPrevSong = () => {
		if (songIndex - 1 < 0) {
			setSongIndex(songs.length - 1);
		} else {
			setSongIndex(songIndex - 1);
		}
	};
	const toNextSong = () => {
		if (songIndex < songs.length - 1) {
			setSongIndex(songIndex + 1);
		} else {
			setSongIndex(0);
		}
	};

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextSong();
			} else {
				setSongProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
		} else {
			clearInterval(intervalRef.current);
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	useEffect(() => {
		audioRef.current.pause();

		audioRef.current = new Audio(musicUrl);
		setSongProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [songIndex]);

	return (
		<>
			<div className="w-2/4">
				<div className="">
					<img className="" src={imageUrl} alt={`Song artwork for ${name}`} />
					<h2>{name}</h2>
				</div>
			</div>
			<AudioControls />
		</>
	);
};

export default AudioPlayer;
