import React from "react";
import BangladeshMap from "./BangladeshMap";
import BranchesHooks from "../../hooks/branchesHooks";

const Coverage = () => {
	const branches = BranchesHooks();
	return (
		<div className="container mx-auto py-10">
			<h1 className="text-3xl font-bold mb-5 text-center">
				We are available in 64 districts
			</h1>

			<BangladeshMap branches={branches} />
		</div>
	);
};

export default Coverage;
