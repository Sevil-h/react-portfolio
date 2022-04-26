import classes from "./card.module.css";
import data from "../../store/data";
import Button from "./Button";

const Card = (props) => {
	console.log(props);
	return (
		<div className={classes.cards}>
			<div className={classes.card}>
				<div className={classes.info}>
					<h1 className={classes.title}>{props.project.title}</h1>
					<p className={classes.text}>{props.project.descriptionShort}</p>
					<p className={classes.smallText}>{props.project.programs}</p>
					<button className={classes.button}>View Project</button>
				</div>
				<div className={classes.right}>
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
			</div>
		</div>
	);
};

export default Card;
