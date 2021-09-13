import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
        };
    }

    changeHandler = (e) => {
        this.setState({ email: e.target.value });
    };

    /**
     * Only lets you submit for a newsletter if the email provided is valid. If yes, alerts you that you successfully subscribed.
     */
    submitHandler = (e) => {
        e.preventDefault();
        alert(
            "Successfully subscribed. Thank you for subscribing to our eminent newsletter, you will be spammed for all eternity. Enjoy!"
        );
    };

    render() {
        return (
            <footer className="footer">
                <div className="footer-socials">
                    <div className="footer-socials text">Be social!</div>
                    <ul className="social-links">
                        <li>
                            <a href="#!">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="newsletter">
                    <form
                        htmlFor="newsletter"
                        onSubmit={(e) => this.submitHandler(e)}
                    >
                        <Form.Label>Subscribe to our newsletter!</Form.Label>
                        <Form.Control
                            type="email"
                            onChange={this.changeHandler}
                            placeholder="name@example.com"
                        />
                        <Button
                            variant="outline-secondary"
                            htmlFor="newsletter"
                            type="submit"
                            className="newsletter-btn"
                        >
                            Subscribe!
                        </Button>
                    </form>
                </div>
                <div className="footer-nav">
                    <li>
                        <a href="#!">About us</a>
                    </li>
                    <li>
                        <a href="#!">Jobs</a>
                    </li>
                </div>
            </footer>
        );
    }
}

export default Footer;
