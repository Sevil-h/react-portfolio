import classes from "./CardsContainer.module.css";
import Card from "./Card";
import data from "../../store/data";

const CardsContainer = () => {
	return (
		<div className={classes.box}>
			<div className={classes.container}>
				{data.map((item) => (
					<Card key={item.id} project={item} />
				))}
			</div>
		</div>
	);
};

export default CardsContainer;
