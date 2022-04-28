import React from "react";
import classes from "./ButtonSmall.module.css";

const ButtonSmall = (props) => {
	return <button className={classes.button}>{props.btnName}</button>;
};

export default ButtonSmall;
