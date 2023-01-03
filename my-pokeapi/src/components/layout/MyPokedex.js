import React from "react";
import { Link } from "react-router-dom";
import "../../style/mypokedex.css";

function SearchPokemon(name) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name.. ex: pikachu"
        style={input}
        className="input-pokedex"
      />
      <Link to="/pokedex">
        <button style={btn} className="btn-input">
          Search
        </button>
      </Link>
    </div>
  );
}

const btn = {
  textDecoration: "none",
  padding: "5px",
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
  padding: "3px",
  marginLeft: "1rem",
};

export default SearchPokemon;
