import React from "react";
import ShowRecipe from "./ShowRecipe";

function MainPage() {
	return (
		<div className="main">
			<div className="container">
				<ShowRecipe recipeid={1} />
			</div>
			<div className="container">
				<ShowRecipe recipeid={2} />
			</div>
		</div>
	);
}
export default MainPage;
