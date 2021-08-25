import React from "react";
import { MOODS } from "./components/constants/records";
import Record from "./components/Record";
import SongList from "./components/SongList";

function App() {
	return (
		<>
			{/* Top Header Bar */}
			<div className="flex bg-yellow-400 py-5 px-8 justify-between">
				<h2 className="text-lg">
					<a href="/">K.K. Radio</a>
				</h2>
			</div>
			{/* Hero Text */}
			<div className="mt-10 w-1/2 mx-auto">
				<h3 className="text-2xl text-center">Tell me how you're feeling and I'll groove on it.</h3>
			</div>
			{/* Carousel */}
			<div class="flex justify-center w-4/5 mx-auto mt-10">
				{MOODS.map((m, i) => {
					return (
						<>
							<Record key={i} name={m.name} color={m.color} />
						</>
					);
				})}
			</div>
		</>
	);
}

export default App;
