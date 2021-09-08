import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavDropdown } from "react-bootstrap";

function LoadRecipes() {
	const [recipeList, setRecipeList] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:3002/api/get").then((data) => {
			setRecipeList(data.data);
		});
	}, []);

	return (
		<div>
			{recipeList.map((recipe, key) => {
				return (
					<div key={key}>
						<NavDropdown.Item href={`/loadrecipe/${recipe.id}`}>{recipe.title}</NavDropdown.Item>
					</div>
				);
			})}
		</div>
	);
}

export default LoadRecipes;
