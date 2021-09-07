import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import LoadRecipes from "./components/LoadRecipes";
import PageLoader from "./components/PageLoader";
import MainPage from "./components/MainPage";

function App() {
	return (
		<div className="App">
			<header className="header">
				<Navbar bg="light" expand="lg" id="desktop-navigation">
					<Navbar.Brand href="#" className="title">
						<img src="/images/cave.png" width="30" alt="cave" className="title-cave" /> The Recipe Cave
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "300px", zIndex: "1" }} navbarScroll>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
							<NavDropdown title="Recepies" id="navbarScrollingDropdown">
								<LoadRecipes />
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">+ Add recepie</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="./member">Become a Contributor</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl type="search" placeholder="Search for Recepie" className="mr-2" aria-label="Search" />
							&nbsp;<Button variant="outline-dark">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</header>
			<MainPage />
			<PageLoader />
		</div>
	);
}

export default App;
