import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Pokedex from "./components/Pokedex";
import SearchPokemon from "./components/layout/MyPokedex";
import Login from "./components/Login";

import Battle from "./components/layout/Battle";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex" element={<SearchPokemon />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </Router>
  );
}

export default App;
