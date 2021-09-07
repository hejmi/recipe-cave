import React from "react";

function ShowRecipe() {
	return (
		<div className="recipe-container">
			<div>
				<img src="/images/recipe/1.jpg" alt="1" className="recipe-image" />
			</div>
			<div className="recipe-content">
				<div className="recipe-title">Easy Pancakes</div>
				<em>Making pancake batter from scratch is so simple that you'll wonder why you never did it before!</em>
				<div className="recipe-bottom">Prep: 5min, Cooking: 20min</div>
			</div>
		</div>
	);
}
export default ShowRecipe;
