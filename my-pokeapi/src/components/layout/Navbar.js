// This file is used to display the navbar of the pokedex
// It contains the different pages of the pokedex
// It also contains the button to connect to the pokedex

// Import in the component the React library, the css file, the Container, Nav and Navbar components from react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/navbar.css";

// Allow to display the nav bar with the different pages of the pokedex
function PrintNavBar() {
  const navigate = useNavigate();
  return (
    <Navbar className="navbar">
      <Container>
        <Nav className="me-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="logo"
            className="logo"
          />
          {/* Display the different pages of the pokedex */}
          <Nav.Link
            style={{
              color: "#ffd322",
              fontWeight: "bold",
              WebkitTextStroke: 0.5 + "px #2a68b0",
              fontSize: 20 + "px",
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
              fontSize: 20 + "px",
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
              fontSize: 20 + "px",
            }}
            href="/battle"
          >
            Battle
          </Nav.Link>

          <button className="btn-connexion" onClick={() => navigate("/login")}>
            Connexion
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PrintNavBar;
