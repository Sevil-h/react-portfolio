import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselContainer = (props) => {
	return (
		<Carousel>
			{props.images.map((item) => (
				<div key={item.img}>
					<img src={item.img} alt={props.title} />
					<p>{item.text}</p>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselContainer;
