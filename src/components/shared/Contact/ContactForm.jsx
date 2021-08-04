import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [value, setValue] = useState()


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
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>

                
                        <Form.Group controlId="phone">
                            <Form.Label>Phone number</Form.Label>
                            <PhoneInput
                                className="form-control d-flex"
                                international
                                defaultCountry="GB"
                                countryCallingCodeEditable={false}
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} 
                                required
                                />

                        </Form.Group>
                    

                <Form.Group controlId="email">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a message *</Form.Label>
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
