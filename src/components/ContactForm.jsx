import React from 'react'
import {useRef} from 'react';

import Container from 'react-bootstrap/Container';
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
    <div>
        <p>If you know of a child or family in need of a meal, groceries, school supplies,
            toiletries or necessities, or if you yourself are in need, please send us a message
            and we will do our best to share our blessings and ALOHA.
        </p>
    </div>
  )
}

export default ContactForm