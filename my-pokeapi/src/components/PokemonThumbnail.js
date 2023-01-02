import React from "react";

const PokemonThumbnail = ({ id, name, image, type, type2 }) => {
  return (
    <div className="thumb-container">
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
            color: "#333",
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
