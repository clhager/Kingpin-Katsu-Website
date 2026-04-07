import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Footer from './Footer';
import Homepage from './Homepage';
import Navigation from './NavigationBar';

export default function DesktopHome() {
  return (
    <Container fluid className='desktop-container p-0 m-0'>
      <Navigation />
      <Homepage />
      <Footer />
    </Container>
  )
}
