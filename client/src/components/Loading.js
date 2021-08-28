import React from "react";

const Loading = ({ loading }) => {
	return (
		<>
			{loading ? (
				<section>
					<span>Loading...</span>
				</section>
			) : null}
		</>
	);
};

export default Loading;
