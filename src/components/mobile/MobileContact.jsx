import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import ContactForm from '../common/ContactForm';
import MobileFooter from './MobileFooter';
import MobileNavbar from './MobileNavbar';

export default function MobileContact() {
  return (
    <div>
      <MobileNavbar />
      
      <Container fluid className='contact-container align-items-center flex-grow-1 text-center'>
        <h1 className='front-page-title'>
          Contact Us
        </h1>
        <div className="py-3 m-0">
          <p className='p-0 m-0 homepage-paragraph padded-15'>
            Interested in catering?
          </p>
          <p className='p-0 m-0 homepage-paragraph padded-15'>
            Want to collab?
          </p>
        </div>
        <p className='homepage-paragraph padded-15 text-break'>
          Reach out and let us know if there is anything we can do for you! (pop-up requests, custom packaging, bulk orders, etc.)
        </p>
        <ContactForm />        
      </Container>

      <MobileFooter />
    </div>
  );
}
