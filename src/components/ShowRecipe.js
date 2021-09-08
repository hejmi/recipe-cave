import React from "react";
import { Clock } from "react-bootstrap-icons";

/*let recipeId = this.props.recipeid;*/
const openRecipe = (id) => console.log("Opened recipe: " + id);

function ShowRecipe() {
	return (
		<div className="recipe-container" onClick={() => openRecipe(1)}>
			<div>
				<img src="/images/recipe/1.jpg" alt="1" className="recipe-image" />
			</div>
			<div className="recipe-content">
				<div className="recipe-title">Easy Peasy Pancakes</div>
				<em className="recipe-desc">Making pancake batter from scratch is so simple that you'll wonder why you never did it before!</em>
				<div className="recipe-bottom">
					<Clock /> <span>Prep: 5min, Cooking: 20min</span>
				</div>
			</div>
		</div>
	);
}
export default ShowRecipe;
