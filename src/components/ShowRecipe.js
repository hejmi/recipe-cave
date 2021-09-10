import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import { Clock } from "react-bootstrap-icons";

function ShowRecipe(props) {
	const history = useHistory();

	const openRecipe = (e) => {
		history.push(`/recipes/${e}`);
	};

	const [recipeData, setRecipeData] = useState([]);

	useEffect(() => {
		Axios.get(`http://localhost:3002/api/getFromId/${props.recipeid}`).then((data) => {
			setRecipeData(data.data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

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
						<Clock />{" "}
						<span>
							Prep: {recipe.prep_time} min, Cooking: {recipe.cooking_time}min
						</span>
					</div>
				</div>
			</div>
		);
	});
}
export default ShowRecipe;
