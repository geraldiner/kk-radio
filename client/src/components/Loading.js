import React from "react";

const Loading = ({ loading }) => {
	return (
		<>
			{loading ? (
				<div className="flex w-2/4 mx-auto mt-16">
					<span>Loading...</span>
				</div>
			) : null}
		</>
	);
};

export default Loading;
