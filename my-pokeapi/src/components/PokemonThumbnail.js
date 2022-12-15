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
      </div>
    </div>
  );
};

export default PokemonThumbnail;
