const BASE_URL = "https://pokeapi.co/api/v2/";

// Allow to fetch all pokemon information from the API
function detail(pokemon) {
  return fetch(`${BASE_URL}pokemon/${pokemon}`).then((res) => res.json());
}
module.exports = {
  detail,
};
