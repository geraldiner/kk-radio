import React from "react";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
	return (
		<div>
			<button type="button" aria-label="Previous" onClick={onPrevClick}>
				Prev
			</button>
			{isPlaying ? (
				<button type="button" aria-label="Pause" onClick={() => onPlayPauseClick(false)}>
					Pause
				</button>
			) : (
				<button type="button" aria-label="Play" onClick={() => onPlayPauseClick(false)}>
					Play
				</button>
			)}
			<button type="button" aria-label="Next" onClick={onNextClick}>
				Next
			</button>
		</div>
	);
};

export default AudioControls;
