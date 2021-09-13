import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import { Clock } from "react-bootstrap-icons";
import { Rating } from "@material-ui/lab";

/**
 *  Maps result from db to show preview of recipe in slider
 */

function ShowRecipe(props) {
	const history = useHistory();
	const value = 3;

	const openRecipe = (e) => {
		history.push(`/recipes/${e}`);
	};

	const [recipeData, setRecipeData] = useState([]);

	useEffect(() => {
		Axios.get(`http://localhost:3002/api/getFromId/${props.recipeid}`).then((data) => {
			setRecipeData(data.data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	function convertTime(min) {
		let time = min;
		let hours = Math.floor(time / 60);
		let minutes = time % 60;
		return hours + " hrs " + minutes;
	}
	return recipeData.map((recipe, key) => {
		return (
			<div key={key} className="recipe-container" onClick={(e) => openRecipe(props.recipeid)}>
				<div>
					<img src={`/images/recipe/${props.recipeid}.jpg`} alt={props.recipeid} className="recipe-image" />
				</div>
				<div className="recipe-content">
					<div className="recipe-title">{recipe.title}</div>
					<em className="recipe-desc">{recipe.description}</em>
					<div className="recipe-bottom">
						<Rating name="simple-controlled" value={value} />
						<br />
						<Clock />{" "}
						<span>
							Prep: {recipe.prep_time} min, Cooking: {recipe.cooking_time >= 60 ? convertTime(recipe.cooking_time) : recipe.cooking_time} min
						</span>
					</div>
				</div>
			</div>
		);
	});
}
export default ShowRecipe;
