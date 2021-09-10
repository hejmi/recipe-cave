import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios"; /* uttalas acks--ee--oh-ss för den som är nyfiken */
import { Clock } from "react-bootstrap-icons";

export default function ShowSingleRecipe() {
	let { recipeId } = useParams();
	const [recipeData, setRecipeData] = useState([]);
	const [ingredient, setIngredients] = useState([]);

	useEffect(() => {
		Axios.get(`http://localhost:3002/api/getFromId/${recipeId}`).then((data) => {
			setRecipeData(data.data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		Axios.get(`http://localhost:3002/api/getIngredientsFromId/${recipeId}`).then((data) => {
			setIngredients(data.data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return recipeData.map((recipe, key) => {
		return (
			<div key={key} className="header">
				<div className="single-recipe">
					<h3 className="title">{recipe.title}</h3>
					<p>
						<Clock size="16" />
						<span>
							&nbsp;Preparation: {recipe.prep_time} minutes | Cooking: {recipe.cooking_time} minutes
						</span>
					</p>
					<p>{recipe.description}</p>
					<h4 className="title">Ingredients</h4>
					<ul className="ingredient-list">
						{ingredient.map((ingr, ingkey) => {
							return (
								<li key={ingkey}>
									{ingr.measure} {ingr.ingredient}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	});
}
