import React from "react";
import { Link } from "react-router-dom";

function SearchPokemon() {
  return (
    <div>
      <input
        type="text"
        placeholder="Entrez un nom de Pokémon..."
        style={input}
        className="input-pokedex"
      />
      <Link to="/pokedex">
        <button style={btn} className="btn-input">
          Rechercher
        </button>
      </Link>
    </div>
  );
}

const btn = {
  color: "#333",
  textDecoration: "none",
  border: "2px solid #333",
  padding: "5px",
  borderRadius: "8px",
  textAlign: "center",
  width: "6rem",
  margin: "auto",
  marginTop: "2rem",
};

const input = {
  margin: "auto",
  marginTop: "1rem",
  width: "20rem",
  height: "20px",
  border: "1px solid #333",
  borderRadius: "5px",
  padding: "3px",
  marginLeft: "1rem",
};

export default SearchPokemon;
