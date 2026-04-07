import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import MobileNavbar from './MobileNavbar';
import MobileFooter from './MobileFooter';
import katsuFamily1 from '../../../assets/about/katsu-family-1.jpg';
import katsuFamily2 from '../../../assets/about/katsu-family-2.jpg';
import tonkatsuCurry from '../../../assets/about/tonkatsu_curry.png';
import flags from '../../../assets/about/flags.png';


export default function MobileAbout() {
  return (
    <div>      
      <MobileNavbar />
      <Container fluid className='contact-container align-items-center flex-grow-1 text-center p-3'>
        <h1 className='mobile-title p-3 m-0'>
          About Us
        </h1>
        <div className="px-4 py-2 m-0">
          <Image fluid 
            src={katsuFamily1} alt="Kingpin Katsu family"
            height="450" width="450"
            className="p-0 m-0 rounded-72" />
        </div>
        <h2 className='mobile-secondary-title py-2 px-4'>
          Inspired by Asia, born in the Bay Area
        </h2>
        <p className='mobile-paragraph text-break p-2 text-start m-0'>
          We are first and foremost a family-run business! Our journey began with a trip across Asia, where we immersed ourselves in the culinary traditions of Japan, Korea, Hawaii and beyond, studying the art of creating the perfect Katsu at an affordable price. Combining the best techniques we could find, we returned home to bring you a brand new Katsu experience.
        </p>
        <Image fluid 
          src={flags} alt="Flags"
          className="p-2 m-0" />
        <Image fluid 
          src={katsuFamily2} alt="Kingpin Katsu family"
          className="p-2 m-0 rounded-32" />
        <p className='mobile-paragraph text-break p-2 text-start m-0'>
          We love everything katsu, except that it's hard to find it done right. We've broken down what makes Katsu great internationally and brought those techniques directly to you. From our crispy golden panko breading to our handcrafted side dishes, we aim to deliver an authentic Katsu experience with every bite.
        </p>
        <Row className="align-items-center">
          <Col xs={5} className="p-0 m-0">
            <Image fluid 
              src={tonkatsuCurry} alt="Kingpin Katsu family"
              className="p-0 m-0" />
          </Col>
          <Col xs={7}>
            <p className='mobile-paragraph text-break p-2 text-start m-0'>
              We start by dry brining our cutlets overnight in our unique seasoning mixture and then proceed to bread them with Japanese-style panko. The result is a extremely juicy and flavorful cutlet that keeps its structure after frying. 
            </p>
          </Col>
        </Row>
        <p className='mobile-paragraph text-break p-2 text-start m-0'>
          All of our sides are hand-prepared fresh daily to pair perfectly with our Katsu.
        </p>
        <p className='mobile-paragraph text-break p-2 text-start m-0'>
          We hope our obsessive passion for making good Katsu is evident through the taste of our food.
        </p>
        <h2 className='mobile-secondary-title py-4 px-10'>
          Come taste the difference at Kingpin Katsu!
        </h2>
      </Container>
      <MobileFooter />
    </div>
  );
}
