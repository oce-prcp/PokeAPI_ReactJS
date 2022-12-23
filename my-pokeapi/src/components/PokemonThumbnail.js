import React from "react";

const PokemonThumbnail = ({ id, name, image, type }) => {
  const style = `thumb-container ${type}`;
  return (
    <div className="thumb-container">
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h2>{name}</h2>
        <small>Type : {type}</small>
        <button
          style={{
            background: "#ffd322",
            color: "#000",
            opacity: "0.8",
            textTransform: "uppercase",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
            fontSize: "12px",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
