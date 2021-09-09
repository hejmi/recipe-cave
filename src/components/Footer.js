import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <div className="footer-socials text">Be social!</div>
                <ul className="social-links">
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <form method="post" action="#" className="contact-form">
                    <label for="email" className="contact-form text">
                        Subscribe to our newsletter!
                    </label>
                    <input type="email" placeholder="Your email here" />
                </form>
            </div>
            <div className="footer-nav">
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Jobs</a>
                </li>
            </div>
        </footer>
    );
}

export default Footer;
