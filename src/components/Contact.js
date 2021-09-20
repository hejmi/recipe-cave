import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { sendForm } from "emailjs-com";

function Contact() {
    const [toSend, setToSend] = useState({
        fromname: "",
        message: "",
        replyto: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm(
            "service_bpskx3i",
            "template_37kp03i",
            "#contactForm",
            "user_VySAGNSZd2vNt2qb3jvXm"
        ).then(
            (result) => {
                console.log(result.text);
                alert("Thank you for reaching out");
                setToSend({
                    fromname: "",
                    message: "",
                    replyto: "",
                });
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToSend({ ...toSend, [name]: value });
    };

    return (
        <div className="contact-main">
            <div className="contact-title">
                <h1>Feel free to leave a massage!</h1>
            </div>

            <div className="contact-forms">
                <Form onSubmit={sendEmail} id="contactForm">
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            name="fromname"
                            value={toSend.fromname}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput2"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="replyto"
                            value={toSend.replyto}
                            onChange={handleChange}
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
                            name="message"
                            rows={2}
                            value={toSend.message}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        variant="outline-secondary"
                        htmlFor="message"
                        type="submit"
                        onSubmit={sendEmail}
                    >
                        Send Massage
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
