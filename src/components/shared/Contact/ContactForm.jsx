import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useState } from 'react'

function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div id="contact-section-text" className="d-flex flex-column mt-4">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>

                <Form.Row>
                    <Col>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="number" required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" required />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a message</Form.Label>
                    <Form.Control as="textarea" rows={4} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send message
                </Button>
            </Form>

        </div>
    )
}

export default ContactForm
