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
						<div id="heroArea" className="mt-10 w-1/2 mx-auto">
							<h3 className="text-2xl text-center">Tell me how you're feeling and I'll groove on it.</h3>
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
