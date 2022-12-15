import React from "react";

function Pokedex() {
  return (
    <div>
      <h1 style={text}>About</h1>
      <br></br>
      <h3 style={title}>IPSSI</h3>
      <p>=========</p>
      <p>This is a TP ToDoList App</p>
    </div>
  );
}

const text = {
  color: "#333",
  textDecoration: "none",
  border: "1px solid #333",
};

const title = {
  color: "#333",
  textDecoration: "none",
};

export default Pokedex;
