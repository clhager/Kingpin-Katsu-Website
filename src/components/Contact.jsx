import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import { useIsMobile } from '../useIsMobile';
import tonkatsuImage from '../../assets/tonkatsu_curry.png';
import sandoImage from '../../assets/menu_items/katsu_sandwich.png';
import sandwichImage from '../../assets/menu_items/chicken_katsu_sandwich.png';
import DesktopNavigation from '../desktop_components/NavigationBar';
import DesktopFooter from '../desktop_components/Footer';
import MobileContact from './mobile/MobileContact';
import DesktopContact from './desktop/DesktopContact';
import '../../katsu.css'

export default function Contact() {
	const isMobile = useIsMobile();	
  	return (
      <div>
        {isMobile ? <MobileContact /> : <DesktopContact />}
      </div>
    );
}
