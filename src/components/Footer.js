import React from "react";
import { Form } from "react-bootstrap";

function Footer() {
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
				<form method="post" action="#!">
					<Form.Label>Subscribe to our newsletter!</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" />
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

export default Footer;
