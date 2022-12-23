import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import pokemonService from "./components/pokemonService";
import Navbar from "./components/layout/Navbar";
import Pokedex from "./components/layout/Pokedex";
import PokemonThumbnail from "./components/PokemonThumbnail";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const handleClick = async () => {
    try {
      const responce = await pokemonService.detail(allPokemons);
      setLoadMore(responce);
    } catch (err) {
      setLoadMore({ error: "pokemon not found" });
    }
  };

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/?offset=0&limit=20`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  const sortPokemon = (p1, p2) => p1.id < p2.id;

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
      <div className="app-container">
        {/* <input
          value={allPokemons}
          onChange={(evt) => setAllPokemons(evt.target.value)}
        />
        <button onClick={handleClick}>Search</button>

        {loadMore &&
          (loadMore.error ? (
            <h1>{loadMore.error}</h1>
          ) : (
            <div>
              <h1>{loadMore.name}</h1>
              <img src={loadMore.sprites.front_default} alt="lolsorry" />
            </div>
          ))} */}
        <h1>Pokémons</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.sort(sortPokemon).map((pokemon, index) => (
              <PokemonThumbnail
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="load-more" onClick={() => getAllPokemons()}>
        Load more
      </button>
    </Router>
  );
}

export default App;
