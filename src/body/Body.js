import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import './Body.css';

const image = require('holderjs');

function Body(){
  return(
    <div className="body-container">

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text= &bg=373940"
              alt="First slide"
            />
            <Carousel.Caption className="d-flex align-items-start flex-column text-left">
              <h3>First headline</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button>Sign up today</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text= &bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption className="d-flex align-items-start flex-column text-left">
              <h3>Second headline</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text= &bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption className="d-flex align-items-start flex-column text-left">
              <h3>Third headline</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="py-5">
        <Row >
          <Col sm md={4}>
            <Card border="light" >
              <Image className="mx-auto d-block" src="holder.js/141x150" roundedCircle />
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="secondary">View details &#187;</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm md={4}>
            <Card border="light" >
              <Image className="mx-auto d-block" src="holder.js/141x150" roundedCircle />
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="secondary">View details &#187;</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm md={4}>
            <Card border="light" >
              <Image className="mx-auto d-block" src="holder.js/141x150" roundedCircle />
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="secondary">View details &#187;</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <ListGroup variant="flush">
          <ListGroup.Item className="py-5 px-sm-0 border-top ">
            <Row className="py-4 align-items-center">
              <Col className="text-left">
                <div className="text-body h1">First featurette heading. <span className="text-muted">It'll blow your mind.</span></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                 ex ea commodo consequat. </span>
              </Col>
              <Col sm={12} md="auto" className="text-right"><Image className="mx-auto w-100" src="holder.js/500x500" fluid /></Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="py-5 px-sm-0">
            <Row className="py-4 align-items-center">
              <Col sm={12} md="auto" className="text-left"><Image className="mx-auto w-100" src="holder.js/500x500" fluid /></Col>
              <Col className="text-left">
                <div className="text-body h1">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                 ex ea commodo consequat. </span></Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="py-5 px-sm-0 border-bottom">
            <Row className="py-4 align-items-center">
              <Col className="text-left">
                <div className="text-body h1">And lastly, this one. <span className="text-muted d-block">Checkmate.</span></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                 ex ea commodo consequat. </span>
              </Col>
              <Col sm={12} md="auto" className="text-right"><Image className="mx-auto w-100" src="holder.js/500x500"/></Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Container>

    </div>
  );
}

export default Body;
