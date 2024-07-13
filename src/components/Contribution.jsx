import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contribution = () => (
  <Container  style={{textAlign:'center',marginTop:'180px'}}>
     <p className="display-5 font-weight-light">Our Contribution</p>
     <p className="lead font-weight-light mx-auto" style={{ maxWidth: '1020px' }}>
      Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
    </p>
    <Row className="mt-5 d-flex justify-content-center">
      <Col md={3} className="mt-5">
        <h3 className="display-1 font-weight-light">5M</h3>
        <p className="h4 font-weight-light mt-4">Daily User Engagements</p>
      </Col>
      <Col md={3} className="mt-5">
        <h3 className="display-1 font-weight-light">$500K</h3>
        <p className="h4 font-weight-light mt-4">Revenue Surge for our Platform</p>
      </Col>
      <Col md={3} className="mt-5">
        <h3 className="display-1 font-weight-light">10X</h3>
        <p className="h4 font-weight-light mt-4">ROAS on all our marketing campaigns</p>
      </Col>
    </Row>
  </Container>
);

export default Contribution;
