import React from "react";
import { Link } from "react-router-dom";
import { PLAYLISTS } from "./constants/records";

const Slider = () => {
	const playlists = Object.keys(PLAYLISTS);
	return (
		<>
			<div className="flex w-4/5 mx-auto my-16 bg-green-100">
				{playlists.map((k, i) => {
					let p = PLAYLISTS[k];
					return (
						<div key={i} className={`w-1/5 ${p.color}`}>
							<Link to={`/playing/${k}`}>
								<h3 className="font-bold text-xl">{p.title}</h3>
							</Link>
							{p.songs.map((s, j) => {
								return (
									<div key={`s-${j}`} className="hover:text-blue-600">
										{s}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Slider;
