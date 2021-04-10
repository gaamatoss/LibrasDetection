import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav, Button } from 'rsuite';
import { useHistory } from 'react-router-dom'
import './style.scss';

import logo from "./logo-login.png";

const NavBarInstance = () => {
  const history = useHistory();
  const navigateTo = () => history.push('/alfabeto');
  const goTo = () => history.push('/gestos');
  return (
    <Navbar className="navbody" appearance="inverse">
      <Navbar.Header>
          <img alt="logo" src={logo} />
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <Button appearance="primary" onClick={navigateTo} className="btn-nav">
            Guia de uso
          </Button>
          <Button appearance="primary" onClick={goTo} className="btn-nav">
            Detectar
          </Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};
  
  export default NavBarInstance;
