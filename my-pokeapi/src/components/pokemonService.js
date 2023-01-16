const BASE_URL = "https://pokeapi.co/api/v2/";

// Permet de récupérer toutes les informations pokemon depuis l'API
// Allow to fetch all pokemon information from the API
function detail(pokemon) {
  return fetch(`${BASE_URL}pokemon/${pokemon}`).then((res) => res.json());
}
module.exports = {
  detail,
};
