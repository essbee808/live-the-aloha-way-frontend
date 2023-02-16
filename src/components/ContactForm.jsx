import React from 'react'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service', 'template', form.current, 'key');

    e.target.reset();
  }
  
  return (
    <Container>
       <Row>
            <Col>
            <h3 className="fs-2 fw-bold"><center>Get in Touch</center></h3>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="Form.ControlInput1">
                    <Form.Control type="text" name="first_name" placeholder="First Name" required/>
                </Form.Group>
            </Form>
            </Col>
       </Row>
    </Container>
  )
}

export default ContactForm