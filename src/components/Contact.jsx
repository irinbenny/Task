import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => (
  <Container style={{textAlign:'center',marginTop:'250px'}}>
    <p className="display-5 font-weight-light">Interested In Delving Deeper Into The Project?</p>
    <p className="lead font-weight-light mx-auto" style={{ maxWidth: '920px', fontSize: '28px' }}>
      If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.
    </p>
    <Row className="justify-content-center mt-5">
      <Col md={4} className="d-flex justify-content-center mb-3 mb-md-0">
        <Button className="bg-transparent text-white" style={{ width: '373px', height: '60px', border: '2px solid white',fontSize:'18px' }}>
          Ring us on Skype
        </Button>
      </Col>
      <Col md={4} className="d-flex justify-content-center">
        <Button className="bg-white text-dark" style={{ width: '373px', height: '60px',fontSize:'18px',fontWeight:'600' }}>
          Contact Us
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Contact;
