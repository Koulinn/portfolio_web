import React from 'react'
import { Form, Button } from 'react-bootstrap'

function ContactForm() {
    return (
        <div id="contact-section-text" className="d-flex flex-column mt-4">
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a message</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send message
                </Button>
            </Form>

        </div>
    )
}

export default ContactForm
