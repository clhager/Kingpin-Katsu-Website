import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';

export default function MobileCTA({ className, text, url, newPage=false }) {
  return (
    <Row className={className}>
      <Col xs={1}></Col>
      <Col xs={10} className="p-0 d-flex justify-content-center">
        <a
          href={url}
          className="katsu-link"
          rel={newPage ? "noopener noreferrer" : undefined}
          target={newPage ? "_blank" : undefined}
        >
          <div className="action-button w-auto">{text}</div>
        </a>
      </Col>
      <Col xs={1}></Col>
    </Row>
  )
}
