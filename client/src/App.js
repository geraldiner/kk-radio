import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Slider from "./components/Slider";
import Radio from "./components/Radio";

function App() {
	return (
		<>
			<TopNav />
			<Router>
				<Switch>
					<Route path="/" exact>
						{/* Hero Text */}
						<div id="heroArea" className="w-8/12 flex justify-center space-x-6 mt-10 w-1/2 mx-auto">
							<div className="w-1/12">
								<img className="w-full h-auto" alt="K.K. Slider avatar" src="https://upload.wikimedia.org/wikipedia/en/3/3f/K.K._Slider.png" />
							</div>
							<h3 className="w-5/12 text-3xl text-center self-center">Tell me how you're feeling and I'll groove on it.</h3>
						</div>
						{/* Carousel */}
						<Slider />
					</Route>
					<Route path="/playing/:title">
						<Radio />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
