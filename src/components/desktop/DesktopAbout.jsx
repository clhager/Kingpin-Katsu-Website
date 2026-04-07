import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import ContactForm from '../common/ContactForm';
import Footer from '../../desktop_components/Footer';
import Navigation from '../../desktop_components/NavigationBar';
import DesktopAbout from './About';
import facebookLogo from '../../../assets/icons/fb.svg'
import instaLogo from '../../../assets/icons/insta_cream.svg'
import mailLogo from '../../../assets/icons/message.svg'
import '../../../katsu.css'

export default function Contact() {
    return (
      <Container fluid className='about-container p-0 m-0'>
        <Navigation />
        <DesktopAbout />
        <Footer/>
      </Container>
    )
}