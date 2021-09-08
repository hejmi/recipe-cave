import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ShowRecipe from "./ShowRecipe";
import useWindowSize from "./useWindowSize";

const Slideshow = () => {
	const size = useWindowSize();
	let slidess;
	size.width <= 800 ? (slidess = 1) : (slidess = 2);
	return (
		<div className="slide-container">
			<Slide slidesToShow={slidess} arrows={false}>
				<div className="each-slide">
					<ShowRecipe recipeid="1" />
				</div>
				<div className="each-slide">
					<ShowRecipe recipeid="2" />
				</div>
				<div className="each-slide">
					<ShowRecipe recipeid="1" />
				</div>
				<div className="each-slide">
					<ShowRecipe recipeid="2" />
				</div>
			</Slide>
		</div>
	);
};
export default Slideshow;
