import classes from "./Slider.module.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = (props) => {
	return (
		<div className={classes.carousel}>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12 cards">
						<div className="dots">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</div>
						<Carousel className={classes.slider}>
							{props.slides.map((slide) => (
								<Carousel.Item key={slide.img} className={classes.sliderItem}>
									<img
										src={slide.img}
										alt="Project photo"
										className="d-block w-100"
									/>
									<Carousel.Caption className={classes.sliderCaption}>
										<p
											className={
												slide.text !== "" ? classes.caption : classes.text
											}
										>
											{slide.text}
										</p>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
