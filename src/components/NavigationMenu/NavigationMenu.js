import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { X, Menu } from 'heroicons-react';
import { menuLinks } from './data';
import './NavigationMenu.css';

function NavigationMenu() {
  const [expanded, setExpanded] = useState(false);

  useEffect(
    () => (expanded ? document.body.classList.add('position-fixed') : document.body.classList.remove('position-fixed')),
    [expanded]
  );

  return (
    <>
      <Navbar bg="white" expand="sm" className="navbar--main shadow" expanded={expanded}>
        <Container>
          <div className="d-flex d-md-none" style={{ position: 'relative', width: '100%' }}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)}>
              {!expanded ? <Menu /> : <X />}
            </Navbar.Toggle>
            <NavLink exact to="/" className="navbar-brand d-block d-sm-none mx-auto">
              <img src="/images/rec-logo.svg" alt="company logo" />
            </NavLink>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-md-auto">
              {menuLinks.map((menuLink, index) => (
                <NavLink
                  exact
                  key={index}
                  to={menuLink.path}
                  activeClassName="selected"
                  className={menuLink.image ? 'navbar-brand d-none d-sm-block' : 'nav-link'}
                  onClick={() => setExpanded(false)}
                >
                  {menuLink.image ? <img src={menuLink.image} alt="company logo" /> : menuLink.name}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationMenu;
