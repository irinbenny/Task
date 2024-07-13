import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

const features = [
  {
    image: feature1,
    title: 'Explore large, destructible environments where no two games Are ever the same.'
  },
  {
    image: feature2,
    title: 'Team up with friends by sprinting, climbing and smashing your way to Earn your Victory Royale'
  },
  {
    image: feature3,
    title: 'Discover even more ways to play across thousands of creator-made game genres'
  }
];

const Features = () => (
  <Container style={{marginTop:'210px'}}>
    <Row>
      {features.map((feature, index) => (
        <Col xs={12} sm={6} md={4} key={index} className="mb-4">
          <Card
            className="text-center"
            style={{ border: 'none', backgroundColor: 'transparent' }}
          >
            <Card.Img
              variant="top"
              src={feature.image}
              style={{ width: '100%', height: 'auto', border: 'none' }}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: '20px', color: 'white', marginTop: '10px',fontWeight:'200',maxWidth: '300px' }}>
                {feature.title}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Features;
