import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadRecipes from "./components/LoadRecipes";
import PageLoader from "./components/PageLoader";
import MainPage from "./components/MainPage";
import ShowSingleRecipe from "./components/ShowSingleRecipe";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <Navbar bg="light" expand="lg" id="desktop-navigation">
                        <Navbar.Brand href="#" className="title">
                            <img
                                src="/images/cave.png"
                                width="30"
                                alt="cave"
                                className="title-cave"
                            />{" "}
                            The Recipe Cave
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: "300px", zIndex: "1" }}
                                navbarScroll
                            >
                                <Link to="/home/" className="nav-link">
                                    Home
                                </Link>
                                <Link to="/contact/" className="nav-link">
                                    Contact us
                                </Link>
                                <NavDropdown
                                    title="Recipes"
                                    id="navbarScrollingDropdown"
                                >
                                    <LoadRecipes />
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        + Add recipe
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Link to="/become-member/" className="nav-link">
                                    Become a Contributor
                                </Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search for Recipe"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                &nbsp;
                                <Button variant="outline-dark">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/home/">
                        <MainPage />
                    </Route>
                    <Route path="/">
                        <PageLoader />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
export default App;
