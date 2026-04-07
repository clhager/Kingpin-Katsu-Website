import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import { useIsMobile } from '../useIsMobile';
import DesktopHomepage from './desktop/DesktopHome';
import MobileHomepage from './mobile/MobileHomepage';
import '../../katsu.css'

export default function Homepage() {
	const isMobile = useIsMobile();	
  	return (
      <div>
        {isMobile ? <MobileHomepage /> : <DesktopHomepage />}
      </div>
    );
}
