import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiReact } from "react-icons/di";
import { DiRubyRough } from "react-icons/di";
import timelineData from "../store/data";

const VerticalTimelineComp = () => {
	console.log(timelineData);
	let reactIconStyles = { background: "#06D6A0" };
	let rubyIconStyles = { background: "#f9c74f" };
	return (
		<div>
			<h1>Timeline</h1>
			<VerticalTimeline>
				{timelineData.map((data) => {
					let isReactIcon = data.icon === "react";

					return (
						<VerticalTimelineElement
							key={data.id}
							date={data.date}
							dateClassName="date"
							iconStyle={isReactIcon ? reactIconStyles : rubyIconStyles}
							icon={isReactIcon ? <DiReact /> : <DiRubyRough />}
						>
							{/* <img src={data.images[0]} alt="project photo" /> */}
							<h3 className="vertical-timeline-element-title">{data.title}</h3>
							<h5 className="vertical-timeline-element-subtitle">
								{data.programs}
							</h5>
							<p id="description">{data.descriptionShort}</p>
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default VerticalTimelineComp;
