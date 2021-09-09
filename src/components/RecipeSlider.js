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
			<h2 className="title" style={{ fontSize: "2rem", paddingLeft: "4rem" }}>
				Check out some random recipes..
			</h2>
			<Slide slidesToShow={slidess} arrows={false} duration={3000} transitionDuration={1000} easing={"ease"}>
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
