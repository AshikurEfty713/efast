import { useEffect, useState } from "react";

const BranchesHooks = () => {
	const [branches, setBranches] = useState([]);

	useEffect(() => {
		fetch("/districtsBranch.json")
			.then((res) => res.json())
			.then((data) => {
				setBranches(data);
			})
			.catch((error) => console.error(error));
	}, []);
	return branches;
};

export default BranchesHooks;
