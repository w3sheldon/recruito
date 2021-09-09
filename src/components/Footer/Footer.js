import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="d-flex align-items-center">
      <Container>
        <div className="d-flex align-content-center align-items-center justify-content-center justify-content-sm-start footer__copyright ">
          <img src="/images/rec-logo-white.svg" alt="a white only design version of the company logo" />
          <span>All rights reserved ©</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
