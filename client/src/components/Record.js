import React from "react";
import { Link } from "react-router-dom";

import SongList from "./SongList";

const Disk = ({ name, title, color, x }) => {
	return (
		<>
			<div className={`flex flex-col items-center w-1/5 px-4 transform hover:scale-125`}>
				<Link to={`/playing/${name}`}>
					<div className="record bg-gray-900 flex justify-center items-center mx-auto">
						<div className={`record-inside`} style={{ background: `${color}` }}></div>
					</div>
					<h3 className="font-bold text-xl text-center my-4">{title}</h3>
				</Link>
			</div>
		</>
	);
};

export default Disk;
