import React from "react";

export default function RecipesByCategory() {
	return (
		<div className="category-container">
			<h2 className="title" style={{ fontSize: "2rem", paddingLeft: "4rem", paddingBottom: "2.5rem" }}>
				..or Find recipes by category
			</h2>
			<div className="grid-list">
				<div>
					<a className="link wipe" href="#!">
						Breakfast
					</a>
					<br />
					<a className="link wipe" href="#!">
						Brunch
					</a>
					<br />
					<a className="link wipe" href="#!">
						Lunch
					</a>
					<br />
				</div>
				<div>
					<a className="link wipe" href="#!">
						Dinner
					</a>
					<br />
					<a className="link wipe" href="#!">
						Light Dinner
					</a>
					<br />
					<a className="link wipe" href="#!">
						Weekend Dinner
					</a>
				</div>
				<div>
					<a className="link wipe" href="#!">
						Desserts
					</a>
					<br />
					<a className="link wipe" href="#!">
						Snacks
					</a>
					<br />
					<a className="link wipe" href="#!">
						Bread
					</a>
				</div>
			</div>
		</div>
	);
}
