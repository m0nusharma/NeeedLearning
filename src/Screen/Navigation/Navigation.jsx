import React from "react";
import "./Navigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ImageOne from "../../assets/ob55wmlw2dtcwx9ly0tq.webp";
import  Button from '../../Componemts/Button/Button'

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=""
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={ImageOne} width="30px" alt="logo" />
          Zebronics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Button item='cleck me'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
};

export default Navigation;
