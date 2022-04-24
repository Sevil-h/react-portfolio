import profileData from "../store/profileData";
import classes from "../style/homepage.module.css";

const HomePage = () => {
	// const technicalSkills = (
	// 	<ul className={classes.technicalSkills}>
	// 		{profileData.technicalSkills.map((skill) => (
	// 			<li className={classes.technicalSkill} key={skill}>
	// 				{skill}
	// 			</li>
	// 		))}
	// 	</ul>
	// );

	// const personalSkills = (
	// 	<ul className={classes.personalSkills}>
	// 		{profileData.personalSkills.map((skill) => (
	// 			<li classNAme={classes.personalSkill} key={skill}>
	// 				{skill}
	// 			</li>
	// 		))}
	// 	</ul>
	// );

	// const interests = (
	// 	<ul className={classes.interests}>
	// 		{profileData.interests.map((interest) => (
	// 			<li className={classes.interest} key={interest}>
	// 				{interest}
	// 			</li>
	// 		))}
	// 	</ul>
	// );

	// const languages = (
	// 	<ul className={classes.languages}>
	// 		{profileData.languages.map((lan) => (
	// 			<li className={classes.language} key={lan}>
	// 				{lan}
	// 			</li>
	// 		))}
	// 	</ul>
	// );

	// const references = (
	// 	<>
	// 		{profileData.references.map((ref) => (
	// 			<ul className={classes.reference} key={ref.name}>
	// 				<li>{ref.name}</li>
	// 				<li>{ref.subtitle}</li>
	// 				<li>{ref.communication}</li>
	// 			</ul>
	// 		))}
	// 	</>
	// );
	return (
		<div className={classes.container}>
			<div className={classes.profile}>
				<div className={classes.avatarContainer}>
					{/* <img className={classes.avatar} src={profileData.profile} /> */}
				</div>
				<h1 className={classes.name}>{profileData.name}</h1>
				<h3 className={classes.position}>{profileData.position}</h3>
				<p className={classes.description}>{profileData.description[0]}</p>
				<p className={classes.description}>{profileData.description[1]}</p>
			</div>
		</div>
	);
};

export default HomePage;
