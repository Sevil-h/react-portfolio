import classes from "./Cards.module.css";
import Card from "./Card";
import data from "../../store/data";
import { DiReact } from "react-icons/di";
import { DiRubyRough } from "react-icons/di";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const CardsContainer = () => {
	let reactIconStyle = {
		background: "#1f0a54",
		boxShadow: "none",
	};
	let rubyIconStyle = {
		background: "#ea860b",
		boxShadow: "none",
	};
	return (
		<div className={classes.box}>
			<div className={classes.container}>
				<VerticalTimeline lineColor={"#1f0a53"}>
					{data.map((item) => {
						let isReactIcon = item.icon === "react";
						return (
							<VerticalTimelineElement
								key={item.id}
								date={item.programs}
								contentStyle={{
									background: "#623ebd",
									boxShadow: "none",
								}}
								contentArrowStyle={{
									borderRight: "7px solid  rgb(98, 62, 189)",
								}}
								dateClassName="date"
								iconStyle={isReactIcon ? reactIconStyle : rubyIconStyle}
								icon={isReactIcon ? <DiReact /> : <DiRubyRough />}
							>
								<Card key={item.id} project={item} />
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default CardsContainer;
