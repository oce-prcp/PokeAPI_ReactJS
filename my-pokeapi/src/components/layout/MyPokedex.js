import React from "react";
import { Link} from "react-router-dom";

function SearchPokemon() {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name.. ex: pikachu"
        placeholder="betweeb a pokemon name"
        style={input}
        className="input-pokedex"
      />
      <Link to="/pokedex">
        <button style={btn} className="btn-input">
          Search
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

<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </button>
</div>;
