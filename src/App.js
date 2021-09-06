import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="header">
				<div className="title">The Recipe Cave</div>
				<div>
					<nav>
						<ul className="desktop-navigation">
							<li>Home</li>
							<li>Recipes</li>
							<li>Contact</li>
						</ul>
						<ul className="mobile-navigation">
							<li>Home</li>
							<li>Recipes</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default App;
