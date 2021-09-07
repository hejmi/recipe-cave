import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import LoadRecipes from "./components/LoadRecipes";

function App() {
	return (
		<div className="App">
			<header className="header">
				<Navbar bg="light" expand="lg" id="desktop-navigation">
					<Navbar.Brand href="#" className="title">
						The Recepie Cave
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "300px" }} navbarScroll>
							<Nav.Link href="#action1">Home</Nav.Link>
							<NavDropdown title="Recepies" id="navbarScrollingDropdown">
								<LoadRecipes />
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">+ Add recepie</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className="d-flex">
							<FormControl type="search" placeholder="Search for Recepie" className="mr-2" aria-label="Search" />
							&nbsp;<Button variant="outline-dark">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</div>
	);
}

export default App;
