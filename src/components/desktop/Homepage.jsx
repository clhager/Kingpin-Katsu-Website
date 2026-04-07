import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import tonkatsuImage from '../../../assets/tonkatsu_curry.png'
import bentoBox from '../../../assets/menu_item_home/bento_box.jpg'
import furikakeFries from '../../../assets/menu_item_home/furikake_fries.jpg'
import potatoSalad from '../../../assets/menu_item_home/potato_salad.jpg'
import katsuSando from '../../../assets/menu_item_home/tonkatsu_sando.jpeg'
import chickenKatsuSandwich from '../../../assets/menu_item_home/chicken_katsu_sandwich.jpg'
import cucumberSalad from '../../../assets/menu_item_home/cucumber.jpg'
import katsuCurry from '../../../assets/menu_item_home/katsu_curry.png'
import macSalad from '../../../assets/menu_item_home/mac_salad.jpg'
import sandoImage from '../../../assets/menu_items/katsu_sandwich.png'
import sandwichImage from '../../../assets/menu_items/chicken_katsu_sandwich.png'
import bigBento from '../../../assets/big_bento_right_cropped.jpg'
import logo from '../../../assets/logo.png'
import Footer from './Footer';
import '../../../katsu.css'

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Headline() {
  return (
    <Container fluid >
      <Row>
        <Col md={6} className='mb-4 p-5 d-flex flex-column align-items-center justify-content-center'>
          <Image className='main-img' height="160" width="160" src={logo} alt="A logo of a cat." />
          <h1 className='front-page-title mb-4'>The new boss of katsu is in town!</h1>
            <Button
              onClick={() => scrollToSection('menu-section')}
              className='bg-maroon desktop-cta cta-18 br-16 text-white'>
              View Our Menu
            </Button>
        </Col>
        <Col md={6} className='m-0 py-5 pe-0' style={{paddingLeft: 120}}>
          <Image fluid className='main-img' src={bigBento} alt="A picture of katsu bento." />
        </Col>
      </Row>
    </Container>
  )
}

function KatsuIntro() {
  return (
    <Container fluid className='pt-4 pb-3' style={{borderTopRightRadius: 150}}>
      <Row>
        <Col md={6} className='bg-black' style={{borderTopRightRadius: 32, borderBottomRightRadius: 32}}>
          <Image className='tonkatsu-img' src={tonkatsuImage} alt="A picture of tonkatsu curry" fluid />
        </Col>
        <Col md={6}>
          <div className='ps-4 pe-5'>
            <h1 className='front-page-title text-align-left'>Fresh Katsu, served your way.</h1>
            <p className='homepage-paragraph text-align-left'>At Kingpin Katsu, we take pride in serving up mouthwatering, crispy Katsu made fresh to order. Whether you prefer a classic style or a unique twist, we offer a variety of katsu options including tonkatsu (pork), chicken katsu, and tofu katsu.</p>
            <p className='homepage-paragraph text-align-left'>Pair your choice with an array of tasty accompaniments: Japanese curry, authentic side salads, and flavorful sauces. Every bite is a burst of flavor, tailored just for you.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function MenuItem({title, image, description}) {
  return (
    <div className="p-3">
      <div className="menu-box p-2 d-flex" style={{ height: '124px' }}>
        <div className="flex-shrink-0" style={{ width: '108px' }}>
          <Image className="menu-img h-100 w-100" src={image} alt={title} />
        </div>
        <div className="p-3 text-align-left d-flex flex-column">
          <h5 className="menu-item-title m-0">{title}</h5>
          <p className="menu-item-desc mb-0">{description}</p>
        </div>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <Container fluid className='p-4' id='menu-section'>
      <Row>
        <a target='_blank' href='https://kingpin-katsu.square.site/' className='text-decoration-none'>
          <div className='desktop-cta-big mx-auto my-4'>
            Our Menu
          </div>
        </a>
      </Row>
      <Row>
        <Col md={6}>
          <MenuItem title='Katsu Bento Box' image={bentoBox} description='Katsu, rice, cabbage, dipping sauce, and two side dishes. The best of everything.' />
          <MenuItem title='Katsu Sando' image={katsuSando} description='Katsu, cabbage, and  tonkatsu sauce between two slices of fluffy milk bread.' />
          <MenuItem title='Katsu Bento Box' image={chickenKatsuSandwich} description='Katsu, romaine lettuce, pickles, tomatoes, and sriracha aioli on a toasted brioche bun.' />
          <MenuItem title='Katsu Bento Box' image={katsuCurry} description='Katsu, Japanese vegetable curry, rice and cabbage.' />
        </Col>
        <Col md={6}>
          <MenuItem title='Furikake Fries' image={furikakeFries} description='Crispy thin straight-cut fries dusted with ground furikake seasoning.' />
          <MenuItem title='Japanese Potato Salad' image={potatoSalad} description='Mashed potatoes with Kewpie mayo, cucumber slices, sweet corn, and shredded carrot.' />
          <MenuItem title='Spicy Cucumber Salad' image={cucumberSalad} description='Pickled cucumber slices, seasoned with Ichimi Togarashi and topped with toasted sesame seeds.' />
          <MenuItem title='Macaroni Salad' image={potatoSalad} description='Small macaroni noodles mixed with Kewpie mayo, a dash of milk, and cubed  Fuji apples.' />
        </Col>
      </Row>
      <Row>
        <a target='_blank' href='https://kingpin-katsu.square.site/' className='text-decoration-none'>
          <div className='bg-orange desktop-cta cta-18 br-16 text-dark mx-auto my-4'>
            <div className='px-3'>Order Now</div>
          </div>
        </a>
      </Row>
    </Container>
  )
}
    

export default function Homepage() {
    return <Container fluid className='homepage-container p-0'>
    <Headline />
    <div className='bg-maroon p-0 m-0' style={{borderTopRightRadius: 150}}>
      <KatsuIntro />
      <Menu />
    </div>
    </Container>
}
