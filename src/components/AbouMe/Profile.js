import React from "react";
import profileData from "../../store/profileData";
import classes from "./Profile.module.css";
import Cv from "../Pdf/Cv.pdf";

const Profile = () => {
	return (
		<div className={classes.container}>
			<img
				className={classes.avatar}
				src={profileData.profile}
				alt="avatar"
			></img>
			<div className={classes.info}>
				<h2>{profileData.name}</h2>
				<h3>{profileData.position}</h3>
				<div className={classes.description}>
					<div>{profileData.description[0]}</div>
					<div>{profileData.description[1]}</div>
				</div>
				<div>
					<a className={classes.cv} href={Cv} target="_blank">
						Link to my Cv
					</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
