import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import katsuLogo from '../../../assets/logo.png'
import '../../../katsu.css'

function OrigNavigationBar() {
    function handleOrder() {
        window.location.href = 'https://kingpin-katsu.square.site/s/order'; 
    }    
    return (
        <Navbar className="my-katsu-navbar"  expand="lg">
            <Container>
                <Navbar.Brand>
                <img
                    src={katsuLogo}
                    alt="Kingpin Katsu Logo Image"
                    style={{ width: '55px', height: '55px' }}
                />
                </Navbar.Brand>
                <div className="navbar-divider"></div>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="navbar-link-item-text">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="navbar-link-item-text">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="navbar-link-item-text">
                            Contact
                        </Nav.Link>
                           <Button className="order-button" onClick={handleOrder}>
                             ORDER NOW
                           </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default function NavigationBar() {
    function handleOrder() {
        window.location.href = 'https://kingpin-katsu.square.site/s/order'; 
    }    
    return (
        <Navbar className="my-katsu-navbar px-5 m-0"  expand="md">
            <Container fluid className="p-0 m-0">
                <Navbar.Brand>
                    <img
                        src={katsuLogo}
                        alt="Kingpin Katsu Logo Image"
                        style={{ width: '55px', height: '55px' }}
                    />
                </Navbar.Brand>
                <div className="navbar-divider"></div>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="navbar-link-item-text">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className="navbar-link-item-text">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="navbar-link-item-text">
                        Contact
                    </Nav.Link>
                       <Button className="order-button" onClick={handleOrder}>
                         ORDER NOW
                       </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}