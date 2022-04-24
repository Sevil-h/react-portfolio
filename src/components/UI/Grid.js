import React, { useState } from "react";
import classes from "./Grid.module.css";
import Profile from "../AbouMe/Profile";
import Contacts from "../AbouMe/Contacts";
import Reference from "../AbouMe/Reference";

const Grid = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.left}>
					<Profile />
				</div>
				<div className={classes.right}>
					<div className={classes.techSkills}>
						<h1 className={classes.title}>Technical Skills</h1>
						<p className={classes.text}>
							Css, HTML, JavaScript, React, Redux, Ruby, Ruby on Rails, POSTSQL,
							GIT, Github, APIs, Heroku, Vercel, Firebase, Figma
						</p>
					</div>
					<div className={classes.personalSkills}>
						<p className={classes.text}>
							Creative Spirit, Organized, Time Managemant, Motivated, Analytical
							Skiils,
						</p>
						<h1 className={classes.title}>Personal Skills</h1>
					</div>
					<div className={classes.socials}>
						<Contacts />
					</div>

					<div className={classes.smallCards}>
						<div className={classes.interests}>
							<p className={classes.text}>
								Arts, Drawing, analogue photograpy, Movies
							</p>
							<h1 className={classes.title}>Interests</h1>
						</div>
						<div className={classes.languages}>
							<h1 className={classes.title}>Languages</h1>
							<p className={classes.text}>English, Turkish</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.footer}>
				<Reference />
			</div>
		</div>
	);
};

export default Grid;
