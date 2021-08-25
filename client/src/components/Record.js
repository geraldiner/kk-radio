import React from "react";
import SongList from "./SongList";

const Disk = ({ name, color }) => {
	return (
		<>
			<div class="flex flex-col w-1/5 items-center flex-wrap">
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
