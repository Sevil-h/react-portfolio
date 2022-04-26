import classes from "./Button.module.css";

import React from "react";

const Button = (props) => {
	return <button className={classes.button}>{props.btnName}</button>;
};

export default Button;
