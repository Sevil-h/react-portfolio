import { useParams } from "react-router-dom";
import Container from "../components/UI/Container";
import data from "../store/data";

const ProjectsDetail = () => {
	const params = useParams();
	const project = data.find((project) => project.id === params.projectId);
	return (
		<div className="ui-margin-top">
			<Container>
				<p>{project.title}</p>
			</Container>
		</div>
	);
};

export default ProjectsDetail;
