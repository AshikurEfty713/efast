import React from "react";
import BangladeshMap from "./BangladeshMap";
import BranchesHooks from "../../hooks/branchesHooks";

const Coverage = () => {
	const branches = BranchesHooks();
	return (
		<div className="container mx-auto py-10">
			<BangladeshMap branches={branches} />
		</div>
	);
};

export default Coverage;
