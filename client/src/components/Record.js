import React from "react";
import SongList from "./SongList";

const Disk = ({ name, color, x }) => {
	return (
		<>
			<div className="flex flex-col w-1/5 items-center justify-between mx-4" style={{ left: `${x}px` }}>
				<div className="record mx-4 flex justify-center items-center bg-gray-900 rounded-full">
					<div className={`${color} rounded-full`}></div>
				</div>
				<div className="my-4 text-center">{name}</div>
				<SongList mood={name} />
			</div>
		</>
	);
};

export default Disk;
