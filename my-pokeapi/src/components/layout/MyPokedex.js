import React from "react";
import { Link } from "react-router-dom";

function SearchPokemon() {
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

<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </button>
</div>;
