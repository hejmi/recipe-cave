import React from "react";
import Slideshow from "./RecipeSlider";
import RecipesByCategory from "./RecipesByCategory";

function MainPage() {
	return (
		<div className="main">
			<Slideshow />
			<RecipesByCategory />
		</div>
	);
}
export default MainPage;
