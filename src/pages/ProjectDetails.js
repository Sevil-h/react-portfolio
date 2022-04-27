import { useParams } from "react-router-dom";

const ProjectsDetail = () => {
	const params = useParams();
	console.log(params);
	return (
		<div>
			<p>{params.projectId}</p>
		</div>
	);
};

export default ProjectsDetail;
