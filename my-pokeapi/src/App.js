import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Pokedex from "./components/Pokedex";
import SearchPokemon from "./components/layout/MyPokedex";
import Fight from "./components/layout/Fight";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex" element={<SearchPokemon />} />
        <Route path="/fight" element={<Fight />} />
      </Routes>
    </Router>
  );
}

export default App;
