import profileData from "../../store/profileData";
import classes from "./Reference.module.css";

const Reference = () => {
	return (
		<div className={classes.container}>
			<h1>References</h1>
			<div className={classes.cards}>
				{profileData.references.map((ref) => (
					<div key={ref.name} className={classes.card}>
						<h4>{ref.name}</h4>
						<p>{ref.subtitle}</p>
						<p>{ref.communication}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reference;
