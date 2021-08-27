import React from "react";
import { PlayIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, PauseIcon } from "@heroicons/react/solid";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
	return (
		<div className="audio-controls">
			<button type="button" className="prev" aria-label="Previous" onClick={onPrevClick}>
				<ArrowCircleLeftIcon />
			</button>
			{isPlaying ? (
				<button type="button" className="pause" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
					<PauseIcon />
				</button>
			) : (
				<button type="button" className="play" onClick={() => onPlayPauseClick(true)} aria-label="Play">
					<PlayIcon />
				</button>
			)}
			<button type="button" className="next" aria-label="Next" onClick={onNextClick}>
				<ArrowCircleRightIcon />
			</button>
		</div>
	);
};

export default AudioControls;
