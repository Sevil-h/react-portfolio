import classes from "./banner.module.css";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

function Banner(props) {
	return (
		<div className={classes.container}>
			<div className={classes.bigCircles}>
				<div className={classes.bigCircle}></div>
				<div className={classes.bigCircle}></div>
				<div className={classes.bigCircle}></div>
			</div>
			<div className={classes.banner}>
				<div className={classes.smallCircles}>
					<div className={classes.smallCircle}></div>
					<div className={classes.smallCircle}></div>
					<div className={classes.smallCircle}></div>
					<div className={classes.smallCircle}></div>
					<div className={classes.smallCircle}></div>
					<div className={classes.smallCircle}></div>
				</div>
				<h1 className={classes.title}>{props.title}</h1>
				<h3 className={classes.subtitle}>{props.position}</h3>
				<NavLink to="/projects">
					<Button btnName="View Portfolio" />
				</NavLink>
			</div>
		</div>
	);
}

export default Banner;
