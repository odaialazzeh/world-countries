import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HomeHeader = () => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <NavLink to="/" className="nav-links" />

      <Navbar.Brand>World Countries</Navbar.Brand>

      <div className="nav-icons" />
    </Navbar>
  </header>
);

export default HomeHeader;
