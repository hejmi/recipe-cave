import React, { useState, useEffect } from "react";
import Axios from "axios";

/**
 * Fetch recipe steps from db.
 * @param {*} props recipeId
 * @returns recipe steps
 */

export default function RecipeSteps(props) {
	let recipeId = props.recipeId;
	const [recipeSteps, setRecipeSteps] = useState([]);

	useEffect(() => {
		Axios.get(`http://localhost:3002/api/getStepsFromId/${recipeId}`).then((data) => {
			setRecipeSteps(data.data);
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	return recipeSteps.map((step, key) => {
		return (
			<li key={key} className="more-row-space">
				{step.description}
			</li>
		);
	});
}
