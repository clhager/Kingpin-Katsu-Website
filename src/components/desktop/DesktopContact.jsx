import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import ContactForm from '../common/ContactForm';
import Footer from '../../desktop_components/Footer';
import Navigation from '../../desktop_components/NavigationBar';
import facebookLogo from '../../../assets/icons/fb.svg'
import instaLogo from '../../../assets/icons/insta_cream.svg'
import mailLogo from '../../../assets/icons/message.svg'
import '../../../katsu.css'

export default function Contact() {
    return (
      <Container fluid className='desktop-container p-0 m-0'>
        <Navigation />
        <Row style={{paddingTop: 50, paddingBottom: 50}}>
            <Col md={1}></Col>    
            <Col md={5}>   
              <h1 className='front-page-title' style={{paddingTop: '40px'}}>CONTACT US</h1>
              <p className='ff-text desktop-title fw-bold text-center py-5 px-0' style={{ width: '60%', margin: 'auto' }}>
                Reach out and let us know if there is anything we can do for you!
              </p>
              <div className='px-5'>
                <p className='ff-text paragraph fw-semibold text-start'>You can also DM/email us below:</p>
                <p className='footer-kingpin-katsu'><img className='social-icon' src={instaLogo}/> <a className='footer-kingpin-katsu' href="https://www.instagram.com/kingpin.katsu/">@kingpin.katsu</a></p>
                <p className='footer-kingpin-katsu'><img className='social-icon' src={facebookLogo}/> <a className='footer-kingpin-katsu' href="https://www.facebook.com/Kingpin.Katsu/">Kingpin.Katsu</a></p>
                <p className='footer-kingpin-katsu'><img className='social-icon' src={mailLogo}/> kingpinkatsu@gmail.com</p>
              </div>
            </Col>
            <Col md={5}>
              <ContactForm />
            </Col>
            <Col md={1}></Col>          
        </Row>
        <div className="partial-divider"></div> 
        <Footer/>
      </Container>
    )
}