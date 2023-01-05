// This component is the main page of the app, it displays the list of pokemons and the search bar
// It also contains the function that allows to search a pokemon by name

// Import in the component the React library, the css file, the PokemonThumbnail component and the useState and useEffect hooks
import React from "react";
import "../../style/mypokedex.css";
import { useEffect, useState } from "react";
import PokemonThumbnail from "../PokemonThumbnail";

// Function that allows to search from the API a pokemon name and display and display it
function SearchPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [, setLoading] = useState(false);
  const [txtInput, settxtInput] = useState("");
  const [, setError] = useState(null);

  // Fetch the API
  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      setError(null);

      // Get the pokemon name from the input
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${txtInput}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        // Set the pokemon name in the state
        setPokemon(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    // If the input is not empty, fetch the API
    if (txtInput !== "") {
      fetchPokemon();
    }
  }, [txtInput]);
  //  Display the search bar and the pokemon thumbnail
  return (
    <div>
      <div></div>
      <input
        type="text"
        onChange={(name) => {
          settxtInput(name.target.value);
          console.log(name);
        }}
        placeholder="Enter a name.. ex: pikachu"
        style={input}
        className="input-pokedex"
      />

      {/* If the pokemon is not null, display the pokemon thumbnail */}
      {!pokemon === false && (
        <PokemonThumbnail
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          type2={pokemon.types[1]?.type.name}
        />
      )}
    </div>
  );
}
// CSS to input
const input = {
  margin: "auto",
  marginTop: "1rem",
  width: "20rem",
  height: "20px",
  padding: "3px",
  marginLeft: "1rem",
};

export default SearchPokemon;