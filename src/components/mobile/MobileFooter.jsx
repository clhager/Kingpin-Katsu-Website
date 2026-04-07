import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import katsuLogo from '../../../assets/logo.png';
import menuImage from '../../../assets/icons/menu.svg';
import messageImage from '../../../assets/icons/message.svg'
import fbImage from '../../../assets/icons/fb.svg'
import instaImage from '../../../assets/icons/insta_cream.svg'

const LinkItem = ({ image, text, url }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <img
        className="link-item-icon"
        src={image}
        height="28px"
        width="28px"
        alt=""/>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-item-text text-break">
        {text}
      </a>
    </div>
  );
};

const MobileCTA = ({ className, text, url }) => {
  return (
    <Row className={className}>
      <Col xs={1}></Col>
      <Col xs={10} className="p-0">
        <a
          href={url}
          className="katsu-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="action-button">{text}</div>
        </a>
      </Col>
      <Col xs={1}></Col>
    </Row>
  )
}

const MobileFooter = () => {
  return (
    <div className="bg-maroon overflow-hidden">
      <div className="p-2">
        <div className="h-2 p-0 bg-white" />
      </div>
      <Container className="p-2">
        <Row className="py-3">
          <Col xs={1}></Col>
          <Col xs={2} className="p-0 d-flex align-items-end flex-column">
            <Image fluid src={katsuLogo} alt="Kingpin Katsu Logo" height="64" width="64" />
          </Col>
          <Col xs={8}>
            <div className="bottom-info-title p-0">Kingpin Katsu</div>
            <div className="bottom-info-description p-2 text-break">
              Fresh Katsu, made the way you choose.
            </div>
            <LinkItem image={instaImage} text="@kingpin.katsu" url="https://www.instagram.com/kingpin.katsu/" />
            <LinkItem image={fbImage} text="Kingpin.Katsu" url="https://www.facebook.com/Kingpin.Katsu/" />
            <LinkItem image={messageImage} text="kingpinkatsu@gmail.com" url="mailto:kingpinkatsu@gmail.com" />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <MobileCTA 
          className="py-3"
          text="ORDER NOW" 
          url="https://kingpin-katsu.square.site/s/order"/>
        <MobileCTA 
          className="py-3"
          text="CONTACT US" 
          url="mailto:kingpinkatsu@gmail.com"/>
      </Container>
      <div className="h-24 p-0 bg-maroon" />
    </div>
  );
};

export default MobileFooter;