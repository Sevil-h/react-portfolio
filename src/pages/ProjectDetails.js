import { useParams } from "react-router-dom";
import Container from "../components/UI/Container";
import CarouselContainer from "../components/UI/CarouselContainer";
import data from "../store/data";

const ProjectsDetail = () => {
	const params = useParams();
	const project = data.find((project) => project.id === params.projectId);
	return (
		<div className="ui-margin-top">
			<Container>
				<p>{project.title}</p>
				<CarouselContainer images={project.images} />
			</Container>
		</div>
	);
};

export default ProjectsDetail;
