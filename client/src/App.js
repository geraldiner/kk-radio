import React from "react";

import Slider from "./components/Slider";

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
			<Slider />
		</>
	);
}

export default App;
