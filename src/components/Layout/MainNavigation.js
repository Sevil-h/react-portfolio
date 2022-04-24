import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? classes.active : "")}
						to="/aboutme"
					>
						{"About me"}
					</NavLink>
				</li>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? classes.active : "")}
						to="/home"
					>
						{"Home"}
					</NavLink>
				</li>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? classes.active : "")}
						to="/projects"
					>
						{"Projects"}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavigation;
