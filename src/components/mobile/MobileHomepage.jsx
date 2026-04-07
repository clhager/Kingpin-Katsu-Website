import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import MobileCTA from '../common/MobileCTA';
import MobileNavbar from './MobileNavbar';
import MobileFooter from './MobileFooter';
import bigBento from '../../../assets/big_bento_cropped.jpg';
import katsuSandwich from '../../../assets/homepage_instagram/chicken_katsu_sandwich.jpeg';
import tonkatsuSando from '../../../assets/homepage_instagram/tonkatsu_sando.jpeg';
import wideTonkatsuCurry from '../../../assets/wide_tonkatsu_curry.png';
import tofuKatsu from '../../../assets/homepage_instagram/tofu_katsu.jpg';
import bento from '../../../assets/homepage_instagram/bento.jpg';
import potatoSalad from '../../../assets/potato_salad.jpg';
import katsuSq from '../../../assets/katsu_sq.png';
import cucumber from '../../../assets/menu_item_home/cucumber.jpg';
import furikakeFries from '../../../assets/menu_item_home/furikake_fries.jpg';
import macSalad from '../../../assets/menu_item_home/mac_salad.jpg';
import smallBento from '../../../assets/menu_item_home/small_bento.jpg';
import smallKatsu from '../../../assets/menu_item_home/small_katsu.jpg';


function PromoImage() {
  return (
    <div className="p-0 m-0">
      <Image fluid 
            src={bigBento} alt="Kingpin Katsu"
            height="450" width="450"
            className="p-2 m-0" />
      <h1 className='mobile-title m-0'>
        The new boss of Katsu is in town!
      </h1>
      <MobileCTA
        className="pb-4 m-0" 
        text="View Our Menu" 
        url="#menu-section" />
    </div>
  );
}

function KatsuDescription() {
  return (
    <div className="bg-maroon px-4 py-4 m-0">
      <h3 className="mobile-header-3 py-3 m-0">
        Fresh Katsu, served your way!
      </h3>
      <p className="mobile-paragraph p-0">
        At Kingpin Katsu, we take pride in serving up mouthwatering, crispy katsu made fresh to order.
      </p>
      <div>
        <Image fluid src={wideTonkatsuCurry} className="rounded-5" />
      </div>
      <p className="mobile-paragraph p-0 pt-3">
        Whether you prefer a classic style or a unique twist, we offer a variety of katsu options including tonkatsu (pork), chicken katsu, and tofu katsu. Pair your choice with an array of tasty accompaniments: Japanese curry, authentic side salads, and flavorful sauces. Every bite is a burst of flavor, tailored just for you.
      </p>
    </div>
  );
}

function Menu() {
  return (
    <div id="menu-section" className="bg-maroon p-4 pb-1 m-0">
      <MobileCTA
        className="pb-2 m-0" 
        text="Our Menu" 
        url="" />
      <MenuItem 
        title="Katsu Bento Box"
        image={smallBento}
        text="Katsu, rice, cabbage, dipping sauce, and two side dishes. The best of everything."/>
      <MenuItem 
        title="Katsu Curry"
        image={smallKatsu}
        text="Katsu, Japanese vegetable curry, rice and cabbage."/>
      <MenuItem 
        title="Katsu Sando"
        image={tonkatsuSando}
        text="Katsu, cabbage, and  tonkatsu sauce between two slices of fluffy milk bread."/>
      <MenuItem 
        title="Katsu Burger"
        image={katsuSandwich}
        text="Katsu, romaine lettuce, pickles, tomatoes, and sriracha aioli on a toasted brioche bun."/>
      <MenuItem 
        title="Furikake Fries"
        image={furikakeFries}
        text="Crispy thin straight-cut fries dusted with ground furikake seasoning."/>
      <MenuItem 
        title="Japanese Potato Salad"
        image={potatoSalad}
        text="Mashed potatoes with Kewpie mayo, cucumber slices, sweet corn, and shredded carrot."/>
      <MenuItem 
        title="Spicy Cucumber Salad" 
        image={cucumber}
        text="Pickled cucumber slices, seasoned with Ichimi Togarashi and topped with toasted sesame seeds."/>
      <MenuItem 
        title="Macaroni Salad"
        image={macSalad}
        text="Small macaroni noodles mixed with Kewpie mayo, a dash of milk, and cubed  Fuji apples."/>
    </div>
  );
}

function MenuItem({ title, image, text }) {
  return (
    <Container fluid className="bg-white p-3 rounded-4 my-4" >
      <Row className="align-items-center">
        <Col xs={4} className="text-center">
          <Image fluid 
            src={image} alt="Kingpin Katsu Logo" 
            height="128" width="128" 
            className="object-fit-cover aspect-1x1 rounded-circle"/>
        </Col>
        <Col xs={8} className="pe-1">
          <h6 className="homepage-menu-item">{title}</h6>
          <small className="homepage-menu-item-text">{text}</small>
        </Col>
      </Row>
    </Container>
  );
};

function CateringPromo() {
  return (
    <div className="bg-maroon p-0 pb-3 m-0">
      <h3 className="mobile-header-3 pt-4 pb-3 px-4 m-0">
        We offer catering!
      </h3>
      <Container>
        <Row className="align-items-center">
          <Col xs={6} className="py-0 px-4">
            <p className="mobile-paragraph p-0">
              Whether you prefer delivery or on-site pop-ups, we do both! <Link to="/about" className="fw-bold text-decoration-none text-white">Contact us</Link> for custom orders or special events.
            </p>
          </Col>
          <Col xs={6} className="p-0">
              <Image fluid src={potatoSalad} alt="Potato salad" className="object-fit-cover rounded-start-4" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function InstagramSection() {
  return (
    <div>
      <div className="bg-maroon px-4 pt-4 pb-2 m-0">
        <h3 className="mobile-header-3 pb-3 m-0">
          Follow us on Instagram!
        </h3>
        <h3 className="mobile-header-3 pb-3 m-0">
          @kingpin.katsu
        </h3>
      </div>
      <Container className="bg-maroon pt-2 pb-4">
        <Row>
          <Col xs={6} className="p-0">
            <div className="ratio ratio-1x1">
              <Image fluid src={katsuSandwich} alt="Kingpin Katsu" className="object-fit-cover" />
            </div>
          </Col>
          <Col xs={6} className="p-0">
            <div className="ratio ratio-1x1">
              <Image fluid src={bento} alt="Kingpin Katsu" className="object-fit-cover" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="p-0">
            <div className="ratio ratio-1x1">
              <Image fluid src={tofuKatsu} alt="Kingpin Katsu" className="object-fit-cover" />
            </div>
          </Col>
          <Col xs={6} className="p-0">
            <div className="ratio ratio-1x1">
              <Image fluid src={tonkatsuSando} alt="Kingpin Katsu" className="object-fit-cover" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function Divider() {
  return (
    <div className="bg-maroon p-2">
      <div className="bg-white h-2 p-0" />
    </div>
  )
}

export default function MobileHome() {
  return (
    <div>      
      <MobileNavbar />
      <PromoImage />
      <KatsuDescription />
      <Divider />
      <Menu />

      <Divider />
      <CateringPromo />
      <Divider />
      <InstagramSection />
      <MobileFooter />
    </div>
  );
}
