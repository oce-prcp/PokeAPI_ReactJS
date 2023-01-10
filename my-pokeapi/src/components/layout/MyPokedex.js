import React from "react";
import "../../style/mypokedex.css";
import { useEffect, useState } from "react";
import PokemonThumbnail from "../PokemonThumbnail";
import Button from "react-bootstrap/Button";
import "../../style/mypokedex.css";

//Function that allows to search from the API a pokemon name and display and display it
function SearchPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [, setLoading] = useState(false);
  const [txtInput, settxtInput] = useState("");
  const [, setError] = useState(null);

  // useEffect(() => {
  //   const res = fetch("http://localhost:5000/users/pokemons", {
  //     method: "GET",
  //     headers: {
  //       pseudo: "Julien",
  //     },
  //   });
  //   console.log(res);
  //   setPokemon(res);
  // }, []);

  useEffect(() => {
    async function fetchPokemonTest() {
      const res = await fetch("http://localhost:5000/users/pokemons", {
        method: "GET",
        headers: {
          pseudo: "Julien",
        },
      });
      console.log(res.data);
    }

    fetchPokemonTest();
  }, []);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${txtInput}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        setPokemon(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
      return true;
    }

    if (txtInput !== "") {
      fetchPokemon();
    }
  }, [txtInput]);

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
      {/* <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
        <p>id={pokemon.id}</p>
        <p>type={pokemon.types[0].type.name}</p>
        <p>type2={pokemon.types[1]?.type.name}</p>
      </div> */}
      <Button className="btn-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </Button>

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
