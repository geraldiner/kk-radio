import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepForward, faStepBackward, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
	return (
		<div className="flex justify-between space-x-8">
			<button className="text-2xl hover:text-gray-500" type="button" aria-label="Previous" onClick={onPrevClick}>
				<FontAwesomeIcon icon={faStepBackward} />
			</button>
			{isPlaying ? (
				<button className="text-2xl hover:text-gray-500" type="button" aria-label="Pause" onClick={() => onPlayPauseClick(false)}>
					<FontAwesomeIcon icon={faPause} />
				</button>
			) : (
				<button className="text-2xl hover:text-gray-500" type="button" aria-label="Play" onClick={() => onPlayPauseClick(true)}>
					<FontAwesomeIcon icon={faPlay} />
				</button>
			)}
			<button className="text-2xl hover:text-gray-500" type="button" aria-label="Next" onClick={onNextClick}>
				<FontAwesomeIcon icon={faStepForward} />
			</button>
		</div>
	);
};

export default AudioControls;
