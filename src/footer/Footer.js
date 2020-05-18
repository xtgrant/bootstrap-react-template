import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Footer.css';

const image = require('holderjs');

function Footer(){
  return(
    <Container className="d-flex justify-content-between pb-5">
      <Nav className="mr-auto align-items-center">
        <Nav.Item >
          <span>@ 2017-2018 Company, Inc.</span>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="#privacy">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="#terms">Link</Nav.Link>
        </Nav.Item>
      </Nav>
      <Button inline variant="link">Back to top</Button>
    </Container>
  );
}

export default Footer;
