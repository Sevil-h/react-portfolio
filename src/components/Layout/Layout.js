import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
	const location = useLocation();
	const path = location.pathname;
	return (
		<Fragment>
			<MainNavigation />
			<main>{props.children}</main>
		</Fragment>
	);
}

export default Layout;
