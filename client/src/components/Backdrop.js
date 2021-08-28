import React, { useEffect } from "react";

const Backdrop = ({ activeColor, songIndex, isPlaying }) => {
	useEffect(() => {
		document.documentElement.style.setProperty("--active-color", activeColor);
	}, [songIndex]);
	return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`}></div>;
};

export default Backdrop;
