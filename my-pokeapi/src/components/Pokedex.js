// This component is used to display all the pokemons
// It contains the function that allows to display more pokemons when you press the button
// Import in the component the React library, the css file, the PokemonThumbnail component, the useState and useEffect hooks and the pokemonService
import { useState, useEffect } from "react";
import pokemonService from "./pokemonService";
import PokemonThumbnail from "./PokemonThumbnail";
import "../style/pokedex.css";

// Fonction permettant d'afficher tous les pokemons
// Function that allow to call the API
function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [savedValue, setSavedValue] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  // Fonction qui permet de rechercher depuis l'API un nom de pokémon
  // Search for a pokemon using the API
  // eslint-disable-next-line no-unused-vars
  const handleClick = async () => {
    try {
      const responce = await pokemonService.detail(allPokemons);
      setLoadMore(responce);
    } catch (err) {
      setLoadMore({ error: "pokemon not found" });
    }
  };

  // Fonction qui permet d'afficher plus de pokemons quand on appuie sur le bouton
  // Function that allows you to display more pokemon when you press the button
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    // Fonction qui permet de créer un objet pokemon
    // Function to create a pokemon object
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
    // Fonction qui permet de créer un objet pokemon
    // Function to create a pokemon object
    const pokemons = await createPokemonObject(data.results);
    setAllPokemons([...allPokemons, ...pokemons]);
  };

  // Fonction qui permet de mettre en ordre les pokemons
  // Function that allow to put in order the pokemon
  const sortPokemon = (p1, p2) => p1.id < p2.id;

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = JSON.parse(localStorage.getItem("MyRegisteredPokemon"));
    if (value) {
      setSavedValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Fonction qui permet d'ajouter ou de supprimer un pokemon de la liste
  // Function that allows you to add or remove a pokemon from the list
  // eslint-disable-next-line no-unused-vars
  function modifyPokemon(id) {
    const tabtempo = [...savedValue];
    if (tabtempo.includes(id)) {
      tabtempo.splice(tabtempo.indexOf(id), 1);
      setSavedValue(tabtempo);
      // eslint-disable-next-line no-else-return
    } else {
      tabtempo.push(id);
      setSavedValue(tabtempo);
    }
  }
  // Fonction qui permet d'ajouter ou de supprimer un pokemon de la liste
  // Function that allows you to add or remove a pokemon from the list
  return (
    <>
    <div className="background-pokedex"></div>
      <div className="app-container">
        <h1>Pokémons</h1>
        {/* Display all the pokemons */}
        <div className="pokemon-container">
          <div className="all-container">
            {/* Sort the pokemon by id */}
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
      {/* Button qui permet d'afficher plus de pokemons quand on appuie sur le bouton */}
      {/* Button that allows you to display more pokemon when you press the button */}
      <button className="load-more" onClick={() => getAllPokemons()}>
        Load more
      </button>
    </>
  );
}

export default Pokedex;
