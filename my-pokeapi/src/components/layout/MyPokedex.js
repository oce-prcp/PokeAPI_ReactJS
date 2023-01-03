import React from "react";
import { Link} from "react-router-dom";
import "../../style/mypokedex.css";

import "../style/mypokedex.css";

function SearchPokemon() {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name.. ex: pikachu"

        className="input-pokedex"
      />
      <Link to="/pokedex">
        <button className="btn-input">
          Search
        </button>
      </Link>
    </div>

  );
}

// const btn = {
//   textDecoration: "none",
//   padding: "5px",
//   textAlign: "center",
//   width: "6rem",
//   margin: "auto",
//   marginTop: "2rem",
// };

// const input = {
//   margin: "auto",
//   marginTop: "1rem",
//   width: "20rem",
//   height: "20px",
//   padding: "3px",
//   marginLeft: "1rem",
// };

export default SearchPokemon;
