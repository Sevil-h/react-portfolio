import { Link } from "react-router-dom";
import classes from "./card.module.css";

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
							<img src={props.project.images[0]} alt="Project Screen" />
						</div>
					</div>
				</div>
				<div className={classes.right}>
					<p className={classes.text}>{props.project.descriptionShort}</p>
					<Link to="/projects/:projectsId">
						<button className={classes.button}>View Project</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Card;
