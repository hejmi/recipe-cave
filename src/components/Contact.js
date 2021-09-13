import React from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
    return (
        <div className="contact-main">
            <div className="contact-title">
                <h1>Feel free to leave a massage!</h1>
            </div>

            <div className="contact-forms">
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput2"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Massage</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Write something!"
                            rows={2}
                        />
                    </Form.Group>
                    <Button
                        variant="outline-secondary"
                        htmlFor="message"
                        type="submit"
                    >
                        Send Massage
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
