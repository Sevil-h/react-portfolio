import { Link } from "react-router-dom";
import classes from "./card.module.css";
import { MdOutlineWebAsset } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const Card = (props) => {
	return (
		<>
			<h1 className={classes.title}>{props.project.title}</h1>

			<div className={classes.card}>
				<div className={classes.left}>
					<div className={classes.screen}>
						<div className={classes.circles}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className={classes.imgContainer}>
							<img src={props.project.images[0].img} alt="Project Screen" />
						</div>
					</div>
					<div>
						<a href={props.project.githubLink} target="_blank" rel="noreferrer">
							<BsGithub className={classes.icon} />
						</a>
						<a href={props.project.link} target="_blank" rel="noreferrer">
							<MdOutlineWebAsset className={classes.icon} />
						</a>
					</div>
				</div>
				<div className={classes.right}>
					<p className={classes.text}>{props.project.descriptionShort}</p>
					<Link to={`/projects/${props.project.id}`}>
						<button className={classes.button}>View Project</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Card;
