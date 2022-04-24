import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<NavLink to="/aboutme"> About me</NavLink>
				</li>
				<li>
					<NavLink to="/home"> Home</NavLink>
				</li>
				<li>
					<NavLink to="/projects"> Projects</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavigation;
