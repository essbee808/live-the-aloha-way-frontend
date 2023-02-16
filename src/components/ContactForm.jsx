import React from 'react'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
import './contactForm.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service', 'template', form.current, 'key');

    e.target.reset();
  }
  
  return (
    <Container className="contact-form">
       <Row>
            <Col>
                <h3 className="fs-2 fw-bold"><center>Get in Touch</center></h3>
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="Form.ControlInput1">
                        <Form.Control type="text" name="first_name" placeholder="First Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.ControlInput2">
                        <Form.Control type="text" name="last_name" placeholder="Last Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.ControlInput3">
                        <Form.Control type="email" name="email" placeholder="Email Address" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                        <Form.Control as="textarea" rows={6} name="message" placeholder="Enter your message here..." required/>
                    </Form.Group>
                    <Button type="submit" className="primary_button">Send Message</Button>
                </Form>
            </Col>
       </Row>
    </Container>
  )
}

export default ContactForm;