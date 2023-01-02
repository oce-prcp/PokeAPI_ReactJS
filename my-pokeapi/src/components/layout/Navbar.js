import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../../index.css";

import React from "react";

function ColorSchemesExample() {
  return (
    <Navbar className="navbar">
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
          className="logo"
        />
        <Nav className="me-auto">
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
            My Pokémons
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
        <br></br>
        <br></br>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
