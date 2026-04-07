import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import katsuLogo from '../../../assets/logo.png';
import menuImage from '../../../assets/icons/menu.svg';

const ToggleButton = () => {
  return (
    <div className="flex-1 p-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0 shadow-none d-block" >
        <Row className="align-items-center">
          <Col>
            <img src={menuImage} alt="Kingpin Katsu Logo" height="36" height="36" />
          </Col>
          <Col className="ps-0">
            <div className="mobile-navbar-link-item-text p-0">Menu</div>
          </Col>
        </Row>
      </Navbar.Toggle>
    </div>
  ) 
}

const Logo = () => {
  return (
    <Navbar.Brand className="mx-auto p-1 flex-1 text-center" >
      <Nav.Link as={Link} to="/">
        <img src={katsuLogo} alt="Kingpin Katsu Logo" height="64" />
      </Nav.Link>
    </Navbar.Brand>
  )
}

const OrderNowButton = () => {
  return (
    <div className="p-3 flex-1 d-flex justify-content-end">
      <Nav.Link href="https://kingpin-katsu.square.site/" target="_blank" className="p-0">
        <div className="mobile-navbar-link-item-text text-center">ORDER<br/>NOW</div>
      </Nav.Link>
    </div>
  )
}

const MobileNavbar = () => {
  return (
    <Navbar expand="lg" className="p-0" variant="dark">

      <Container fluid 
        className="px-0 d-flex justify-content-between align-items-center bottom-shadow" 
        style={{ backgroundColor: "#680000" }}
      >
        <ToggleButton />
        <Logo />
        <OrderNowButton />
      </Container>

      <Navbar.Collapse id="basic-navbar-nav" className="cream-background p-0">
        <Nav className="me-auto">
          <Nav.Link className="mobile-nav-text py-3 px-5" as={Link} to="/">Home</Nav.Link>
          <div className="h-1 p-0 m-0 bg-black" />
          <Nav.Link className="mobile-nav-text py-3 px-5" as={Link} to="/about">About Us</Nav.Link>
          <div className="h-1 p-0 m-0 bg-black" />
          <Nav.Link className="mobile-nav-text py-3 px-5" as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default MobileNavbar;