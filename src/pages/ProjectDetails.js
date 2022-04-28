import { useParams } from "react-router-dom";
import data from "../store/data";
import Slider from "../components/Carousel/Slider";
import ButtonSmall from "../components/UI/ButtonSmall";

const ProjectsDetail = () => {
	const params = useParams();
	const project = data.find((project) => project.id === params.projectId);
	return (
		<div className="container">
			<h1 className="title">{project.title}</h1>
			<Slider slides={project.images} />
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10 col-sm-12">
					<div className="info">
						<p>{project.programs}</p>
						<p>{project.descriptionShort}</p>
						<p>{project.descriptionLong}</p>
						<div className="buttons">
							<a href={project.githubLink} target="_blank">
								<ButtonSmall btnName="View code" />
							</a>
							<a href={project.link} target="_blank">
								<ButtonSmall btnName="View project" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsDetail;
