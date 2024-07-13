import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import image from '../assets/img.jpg';

const HeroSection = () => (
  <Container className="text-center" style={{ marginTop: '140px' }}>
    <h3 style={{ fontSize: '45px', fontWeight: 200, lineHeight: '48px', letterSpacing: '0.96px' }}>
      Epic Games: An American Video Game And Software Developer And Publisher Based In Cary, North Carolina.
    </h3>
    <Image
      src={image}
      fluid
      style={{ width: '100%', marginTop: '60px' }}
    />
    <p style={{ fontSize: '18px', fontWeight: 400, lineHeight: '27px', marginTop: '20px' }}>
      Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
    </p>
    <Button className="btn btn-block bg-white text-dark" style={{ width: '80%', maxWidth: '416px', height: '60px', border: 'none', marginTop: '40px', fontSize: '18px', fontWeight: '600' }}>
      Visit Website
    </Button>
  </Container>
);

export default HeroSection;
