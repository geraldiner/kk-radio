import React from "react";
import Record from "./Record";
import { PLAYLISTS } from "./constants/records";

const Slider = () => {
	const playlists = Object.keys(PLAYLISTS);
	return (
		<>
			<div className="flex jusify-center w-4/5 mx-auto my-16">
				{playlists.map((k, i) => {
					let p = PLAYLISTS[k];
					return <Record key={i} name={k} title={p.title} color={p.color} />;
				})}
			</div>
		</>
	);
};

export default Slider;
