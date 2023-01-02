import { Navbar, Container, Nav, Link } from "react-router-dom";
export default function navbar2() {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="logo"
            className="logo"
          />

                <Nav className="me-auto">
                <Nav.Link href="/">Pokédex National</Nav.Link>
                <Nav.Link href="/MonPokedex">My Pokémons</Nav.Link>
                <div>
                    <input
                        type="text"
                        placeholder="Entrez un nom de Pokémon..."
                        className="input-pokedex"
                    />
                    <Link to="/pokedex">
                        <button className="btn-input">
                        Search
                        </button>
                    </Link>
                </div>
                </Nav>
                
            </Container>
        </Navbar>
          <Nav className="me-auto">
            <Nav.Link href="/">Pokédex National</Nav.Link>
            <Nav.Link href="/MonPokedex">Mon Pokédex</Nav.Link>
            <div>
              <input
                type="text"
                placeholder="Entrez un nom de Pokémon..."
                className="input-pokedex"
              />
              <Link to="/pokedex">
                <button className="btn-input">Rechercher</button>
              </Link>
            </div>
          </Nav>
        </Container>
        </Navbar>
    </div>
    
  );
}
