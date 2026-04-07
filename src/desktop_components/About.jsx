import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import aboutImage from '../../assets/about/about.jpg'
import Footer from './Footer';
import '../../katsu.css'

export default function About() {
    return (
        <Container fluid>
            <Row className="align-items-stretch position-relative" style={{paddingTop: 50}}>
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
                
                <div style={{paddingTop: '100px'}}/>
                <div className="partial-divider"></div>          
            </Row>        
        </Container>
    );
}