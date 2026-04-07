import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import katsuLogo from '../../../assets/logo.png'
import paymentImage from '../../../assets/payment.png'
import facebookLogo from '../../../assets/icons/fb.svg'
import instaLogo from '../../../assets/icons/insta_cream.svg'
import mailLogo from '../../../assets/icons/message.svg'
import { Utils } from '../../useIsMobile'
import '../../../katsu.css'

export default function Footer() {
    return <Row className="align-items-top py-5" style={{maxWidth: '100%'}}>
        <Col md={1}></Col>
        <Col md={2}>
            <Image className='footer-logo-img' src={katsuLogo} alt="Kingpin Katsu Logo" />
        </Col>
        <Col md={4} className='d-flex flex-column justify-content-between align-items-start'>
            <h6 className='footer-kingpin-katsu'>Kingpin Katsu</h6>
            <p className='footer-line'>Fresh Katsu, made the way you choose.</p>
            <Image className='footer-payment-img' src={paymentImage} alt="Picture representing various payment options" />
            <Button className="order-button" href='https://kingpin-katsu.square.site/s/order' target="_blank">
                ORDER NOW
            </Button>
        </Col>
        <Col md={4} className='d-flex flex-column justify-content-between align-items-start ms-auto' style={{ maxWidth: 250}}>
            <p className='footer-kingpin-katsu'><img className='social-icon' src={instaLogo}/> <a className='footer-kingpin-katsu' href="https://www.instagram.com/kingpin.katsu/">@kingpin.katsu</a></p>
            <p className='footer-kingpin-katsu'><img className='social-icon' src={facebookLogo}/> <a className='footer-kingpin-katsu' href="https://www.facebook.com/Kingpin.Katsu/">Kingpin.Katsu</a></p>
            <p className='footer-kingpin-katsu'><img className='social-icon' src={mailLogo}/> kingpinkatsu@gmail.com</p>
            <Button className="order-button" as="a" href="mailto:kingpinkatsu@gmail.com?subject=Inquiry from Website">
                CONTACT US
            </Button>
        </Col>
        <Col md={1}></Col>
    </Row>
}