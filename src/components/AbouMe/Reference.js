import profileData from "../../store/profileData";
import classes from "./Reference.module.css";

const Reference = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>References</h1>
			<div className={classes.cards}>
				{profileData.references.map((ref) => (
					<ul key={ref.name} className={classes.card}>
						<li>{ref.name}</li>
						<li>{ref.subtitle}</li>
						<li>{ref.communication}</li>
					</ul>
				))}
			</div>
		</div>
	);
};

export default Reference;
