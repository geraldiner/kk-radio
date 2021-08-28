import React from "react";
import { ClapSpinner } from "react-spinners-kit";

const Loading = ({ loading, color }) => {
	return (
		<>
			{loading ? (
				<div className="flex flex-col space-y-6 text-center justify-center items-center w-2/4 mx-auto mt-16">
					<h3 className="text-2xl text-center">Right on. I’m tuning up and getting ready to roll.</h3>
					<ClapSpinner size={30} frontColor={color} loading={loading} />
				</div>
			) : null}
		</>
	);
};

export default Loading;
