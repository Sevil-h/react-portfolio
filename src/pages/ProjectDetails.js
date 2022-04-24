import { useParams } from "react-router-dom";

const ProjectsDetail = () => {
	const params = useParams();
	console.log(params.projectId);
	return (
		<section>
			<div>ProjectsDetail</div>
			<p>{params.projectId}</p>
		</section>
	);
};

export default ProjectsDetail;
