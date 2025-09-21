import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/header.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header-navbar">
      <Container fluid className="position-relative">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center order-0">
          <FontAwesomeIcon icon={faHouse} size="lg" className="text-primary" />
          <span className="ms-2 font-weight-bold">GharBhada</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="order-2 order-lg-3 ms-auto"/>

        <Navbar.Collapse id="navbar-nav" className="order-2 order-lg-2 justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/find-property">Find Property</Nav.Link>
            <Nav.Link as={Link} to="/list-property">List Property</Nav.Link>
            <Nav.Link as={Link} to="/list-property">Dashboard</Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/login">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            <button class="btn btn-primary my-2 my-sm-0" type="submit">Sign Up</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;
