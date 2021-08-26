import React, { useState, useEffect, useRef } from "react";
import { MOODS } from "./constants/records";
import Record from "./Record";
import SongList from "./SongList";

const Slider = () => {
	const sliderRef = useRef(null);
	const [dimensions, setDimensions] = useState({});

	useEffect(() => {
		if (sliderRef.current) {
			setDimensions({
				width: sliderRef.current.offsetWidth,
				height: sliderRef.current.offsetHeight,
			});
		}
	}, [sliderRef]);
	return (
		<div class="Slider flex justify-center w-4/5 mx-auto mt-10" ref={sliderRef}>
			<h1>
				width: {dimensions.width}, height: {dimensions.height}
			</h1>
			{MOODS.map((m, i) => {
				return (
					<>
						<Record key={i} name={m.name} color={m.color} />
					</>
				);
			})}
		</div>
	);
};

export default Slider;
