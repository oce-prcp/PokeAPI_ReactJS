import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Pokedex from "./components/Pokedex";
import SearchPokemon from "./components/layout/MyPokedex";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex" element={<SearchPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
