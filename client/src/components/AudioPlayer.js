import React, { useState, useEffect, useRef } from "react";
import { PLAYLISTS } from "./constants/records";
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";
import Record from "./Record";

const AudioPlayer = ({ playlist, songs }) => {
	const [currIndex, setCurrIndex] = useState(0);
	const [songProgress, setSongProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	let currSong = songs[currIndex];

	const audioRef = useRef(new Audio(currSong.music_url));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;

	const currentPercentage = duration ? `${(songProgress / duration) * 100}%` : "0%";

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

	const startTimer = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextSong();
			} else {
				setSongProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	const onScrub = value => {
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setSongProgress(audioRef.current.currentTime);
	};

	const onScrubEnd = () => {
		if (!isPlaying) {
			setIsPlaying(true);
		}
		startTimer();
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		setIsPlaying(false);
		audioRef.current.pause();

		audioRef.current = new Audio(currSong.music_url);
		setSongProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [currIndex]);

	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<>
			<div className="flex justify-center w-4/12 mx-auto my-16">
				<Record name={PLAYLISTS[playlist]} title="" color={PLAYLISTS[playlist].color} />
			</div>
			<div className="flex w-4/12 mx-auto my-16 bg-white rounded-md p-4">
				<div className="w-1/3">
					<img className="rounded-md" src={currSong.image_url} alt={`Song artwork for ${currSong.title}`} />
				</div>
				<div className="flex flex-col w-2/3 space-y-4 items-center justify-center">
					<h3 className="text-xl font-bold">{currSong.title}</h3>
					<Backdrop activeColor={PLAYLISTS[playlist].color} songIndex={currIndex} isPlaying={isPlaying} />
					<AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} onPrevClick={toPrevSong} onNextClick={toNextSong} />
					<input
						type="range"
						value={songProgress}
						step="1"
						min="0"
						max={duration ? duration : `${duration}`}
						onChange={e => onScrub(e.target.value)}
						onMouseUp={onScrubEnd}
						onKeyUp={onScrubEnd}
					/>
				</div>
			</div>
		</>
	);
};

export default AudioPlayer;
