import { NavLink, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const location = useLocation();
	const path = location.pathname;
	return (
		<nav className={path !== "/home" ? classes.notHomePage : ""}>
			<ul>
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
						to="/aboutme"
					>
						{"About me"}
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
