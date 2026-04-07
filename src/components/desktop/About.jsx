import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import aboutImage from '../../../assets/about/about.jpg'
import potatoSalad from '../../../assets/potato_salad.png'
import goldenGate from '../../../assets/golden_gate_fuji_illustration.jpg'
import Footer from './Footer';
import '../../../katsu.css'

function BackgroundPitch() {
  return (
    <Container fluid className='bg-white pt-4 pb-3'>
      <Row>
        <Col md={5}>
          <Image 
            className='object-fit-contain mx-5' 
            src={goldenGate} 
            alt="A picture of tonkatsu curry" 
            style={{ height: 420, borderRadius: 32}} />
        </Col>
        <Col md={6}>
          <div className='ps-4 pe-5 d-flex flex-column justify-content-evenly m-auto'>
            <h1 className='front-page-title text-align-left text-black'>
                Inspired by Asia, born in the Bay Area
            </h1>
            <p className='homepage-paragraph text-align-left text-black mb-2'>
                We love everything katsu, except that it's hard to find it done right!
            </p>
            <p className='homepage-paragraph text-align-left text-black mb-5'>
                We've broken down what makes Katsu great in Japan, Korea, and Hawaii and brought those techniques to you. From our crispy golden panko breading to our handcrafted side dishes, we aim to deliver an authentic Katsu experience with every bite.
            </p>
          </div>
        </Col>
        <Col md={1}/>
      </Row>
    </Container>
  )
}

function CateringPromo() {
  return (
    <Container fluid className='bg-white pt-4 pb-3'>
      <Row>
        <Col md={6}>
          <div className='ps-4 pe-5 d-flex flex-column justify-content-evenly'>
            <h1 className='front-page-title text-align-left text-black'>
                We offer catering!
            </h1>
            <p className='homepage-paragraph text-align-left text-black mb-5'>
                Whether you prefer delivery or on-site pop-ups, we do both! Contact us for custom orders or special events.
            </p>
          </div>
        </Col>
        <Col md={6} className='bg-black' style={{borderTopLeftRadius: 32, borderBottomLeftRadius: 32}}>
          <Image fluid 
            className='tonkatsu-img' 
            src={potatoSalad} 
            alt="A picture of tonkatsu curry" 
            style={{ maxWidth: 256, maxHeight: 256}} />
        </Col>
      </Row>
    </Container>
  )
}

export default function About() {
    return (
        <Container fluid style={{maxWidth: 1400}}>
            <Row className="align-items-stretch position-relative py-5" >
                <Col md={1}></Col>    
                
                {/* This Column "DRIVES" the height of the row */}
                <Col md={5} style={{ paddingTop: 60, paddingBottom: 60}}>   
                    <h1 className='front-page-title'>ABOUT US</h1>
                    <div style={{paddingTop: '25px'}}>
                        <p className='homepage-paragraph'>We are first and foremost a family-run business! Our journey began with a trip across Asia, where we immersed ourselves in the culinary traditions of Japan, Korea, Hawaii and beyond, studying the art of creating the perfect Katsu. Combining the best techniques we could find, we returned home to bring you a brand new Katsu experience.</p>
                        <p className='homepage-paragraph'>We start by dry brining our cutlets overnight in our unique seasoning mixture and then proceed to bread them with Japanese-style panko. The result is a extremely juicy and flavorful cutlet that keeps its structure after frying.</p>
                        <p className='homepage-paragraph'>All of our sides are hand-prepared fresh daily to pair perfectly with our Katsu.</p>
                        <p className='homepage-paragraph'>We hope our obsessive passion for making good Katsu is evident through the taste of our food.</p>
                    </div>
                </Col>

                {/* This Image Column "FOLLOWS" the height of the text column */}
                <Col md={5} className="position-relative" style={{background: "#000000", minHeight: '300px'}}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        padding: 'inherit' // Maintains the column's gutter padding
                    }}>
                        <Image 
                            src={aboutImage} 
                            style={{ 
                                objectFit: 'contain', 
                                width: '100%', 
                                height: '100%'
                            }} 
                            alt="Offset pictures of a happy team" 
                        />
                    </div>
                </Col>

                <Col md={1}></Col>    
            </Row>
            <Row className='bg-white'>
              <BackgroundPitch />
              <CateringPromo />
            </Row> 
            <div style={{paddingTop: '100px'}}/>
            <div className="partial-divider"></div>       
        </Container>
    );
}