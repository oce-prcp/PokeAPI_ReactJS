import { useState, useEffect } from "react";
import pokemonService from "./pokemonService";
import PokemonThumbnail from "./PokemonThumbnail";

function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  //Recherche Pokémon
  // eslint-disable-next-line no-unused-vars
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

    async function createPokemonObject(result) {
      return await Promise.all(
        result.map(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
          );
          const data = await res.json();
          return data;
        })
      );
    }
    const pokemons = await createPokemonObject(data.results);
    setAllPokemons([...allPokemons, ...pokemons]);
    console.log(allPokemons);
  };

  const sortPokemon = (p1, p2) => p1.id < p2.id;

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>Pokémons</h1>

        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.sort(sortPokemon).map((pokemon, index) => (
              <PokemonThumbnail
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                type2={pokemon.types[1]?.type.name}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <button className="load-more" onClick={() => getAllPokemons()}>
        Load more
      </button>
    </>
  );
}

export default Pokedex;
