import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import '../../style/navbar.css';

function ColorSchemesExample() {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav className="me-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="logo"
            className="logo"
          />
          <Nav.Link
            style={{
              color: "#ffd322",
              fontWeight: "bold",
              WebkitTextStroke: 0.5 + "px #2a68b0",
              fontSize: 15 + "px",
            }}
            href="/"
          >
            List
          </Nav.Link>
          <Nav.Link
            style={{
              color: "#ffd322",
              fontWeight: "bold",
              WebkitTextStroke: 0.5 + "px #2a68b0",
              fontSize: 15 + "px",
            }}
            href="/pokedex"
          >
            Pokédex
          </Nav.Link>
          <Nav.Link
            style={{
              color: "#ffd322",
              fontWeight: "bold",
              WebkitTextStroke: 0.5 + "px #2a68b0",
              fontSize: 15 + "px",
            }}
            href="/fight"
          >
            Fight
          </Nav.Link>
          <button className="btn-connexion">Connexion</button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
