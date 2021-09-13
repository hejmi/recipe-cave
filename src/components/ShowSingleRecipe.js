import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import Axios from "axios"; /* uttalas acks--ee--oh-ss för den som är nyfiken */
import { Clock, ArrowLeftCircleFill } from "react-bootstrap-icons";
import RecipeSteps from "./RecipeSteps";
import { Rating } from "@material-ui/lab";

/*
 * Maps recipe data & ingredients data from database fetch
 * to display a single recipe.
 */

export default function ShowSingleRecipe() {
	let { recipeId } = useParams();
	const [recipeData, setRecipeData] = useState([]);
	const [ingredient, setIngredients] = useState([]);
	const [rating, setRating] = useState(3);
	const history = useHistory();

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

	// converts minutes to hours and minutes
	function convertTime(min) {
		let time = min;
		let hours = Math.floor(time / 60);
		let minutes = time % 60;
		return hours + " hrs " + minutes;
	}

	return recipeData.map((recipe, key) => {
		return (
			<div key={key} className="header zindex">
				<br />
				<a className="link wipe" href="#!" onClick={() => history.goBack()}>
					<ArrowLeftCircleFill size="15" /> BACK
				</a>
				<div className="stars-bar">
					<Rating
						name="simple-controlled"
						value={rating}
						onChange={(e, newValue) => {
							setRating(newValue);
							alert(`You rated this with ${newValue} stars!`);
						}}
					/>
				</div>
				<div className="single-recipe">
					<img src={`/images/recipe/${recipeId}.jpg`} alt={recipe.title} className="large-image" />
					<h3 className="title">{recipe.title}</h3>
					<p>
						<Clock size="16" />
						<span>
							&nbsp;Preparation: {recipe.prep_time} minutes | Cooking: {recipe.cooking_time >= 60 ? convertTime(recipe.cooking_time) : recipe.cooking_time} minutes
						</span>
					</p>
					<p>{recipe.description}</p>
					<h4 className="title">You'll need:</h4>
					<ul className="ingredient-list">
						{ingredient.map((ingr, ingkey) => {
							return (
								<li key={ingkey}>
									{ingr.measure} {ingr.ingredient}
								</li>
							);
						})}
					</ul>
					<h4 className="title">Step by step:</h4>
					<ul className="ingredient-list numbered">
						<RecipeSteps recipeId={recipeId} />
					</ul>
				</div>
			</div>
		);
	});
}
