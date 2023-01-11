import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Pokedex from "./components/Pokedex";
import SearchPokemon from "./components/layout/MyPokedex";
<<<<<<< HEAD
// import Register from "./components/Register";
import Login from "./components/Login";
=======
import Battle from "./components/layout/Battle";
>>>>>>> 6e2d507adb5e29c3ccdeae8d564a343b2ff712dd

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex" element={<SearchPokemon />} />
<<<<<<< HEAD
=======
        <Route path="/battle" element={<Battle/>} />
>>>>>>> 6e2d507adb5e29c3ccdeae8d564a343b2ff712dd
      </Routes>
    </Router>
  );
}

export default App;
