// This component is used to display the pokemon thumbnail
// When the user search a pokemon in the search bar of the pokedex page and then click on the thumbnail button to add
// the pokemon to the pokedex list and then click on the thumbnail button to remove the pokemon from the pokedex list

// Import in the component the React library, the Button component from react-bootstrap and the css file
import React from "react";
import Button from "react-bootstrap/Button";

// Create a function that allows to add or remove a pokemon from the pokedex list
const PokemonThumbnail = ({ id, name, image, type, type2 }) => {
  // function AddPokemon() {
  //   onclick(id)

  //   console.log("Button was clicked");
  // }
  return (
    <div className="thumb-container">
      <Button
        className="btn-star"
        onClick={() => {
          fetch("http://localhost:5000/users/pokemons", {
            method: "PATCH",
            body: JSON.stringify({
              id: id,
              pseudo: "Julien",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      </Button>

      {/* Display the pokemon id, the pokemon image, the pokemon name and the pokemon type */}
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h2>{name}</h2>
        <small
          style={{
            background: "#ffd322",
            color: "#000",
            opacity: "0.8",
            textTransform: "uppercase",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          Type : {type}
          {type2 ? " | " + type2 : ""}
        </small>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
