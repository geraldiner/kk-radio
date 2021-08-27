import React, { useState, useEffect, useRef } from "react";
import { MOODS } from "./constants/records";
import Record from "./Record";
import SongList from "./SongList";

const Slider = () => {
	const sliderRef = useRef(null);
	const middleIndex = Math.floor(MOODS.length / 2);
	const [dimensions, setDimensions] = useState({});

	useEffect(() => {
		if (sliderRef.current) {
			setDimensions({
				width: parseFloat(sliderRef.current.offsetWidth),
				height: parseFloat(sliderRef.current.offsetHeight),
			});
		}
	}, [sliderRef]);
	return (
		<div
			className="Slider flex justify-center align-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-200"
			ref={sliderRef}
		>
			{MOODS.map((m, i) => {
				let x = 0;
				if (i < middleIndex) {
					x = dimensions.width - 300 * (middleIndex - i);
				} else {
					x = dimensions.width + 300 * (i - middleIndex);
				}
				return (
					<>
						<Record key={i} name={m.name} color={m.color} x={x} />
					</>
				);
			})}
		</div>
	);
};

export default Slider;
