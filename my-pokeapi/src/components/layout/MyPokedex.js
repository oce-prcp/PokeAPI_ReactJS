import React from "react";
import { Link} from "react-router-dom";
import "../../style/mypokedex.css";
import {useEffect,useState } from "react";
import PokemonThumbnail from "../PokemonThumbnail";


function SearchPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [,setLoading] = useState(false);
  const [txtImput, settxtInput] = useState("");
  const [,setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${txtImput}`);
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
    }

    if(txtImput !== ""){
      fetchPokemon();
    }
  }, [txtImput]);
  return (
    <div>

<div></div>
      <input
        type="text" onChange={name =>{
          settxtInput(name.target.value);
          console.log(name)
        }}
        
        
        placeholder="Enter a name.. ex: pikachu"
        style={input}
        className="input-pokedex"
        />
      <Link to="/pokedex">
        <button style={btn} className="btn-input">
          Search
        </button>
      </Link>
        {!pokemon === false &&
        <PokemonThumbnail
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        type2={pokemon.types[1]?.type.name}
        />
        }
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
