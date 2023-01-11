import axios from "axios";

// Path to the backend server

export default axios.create({
  baseURL: "http://localhost:3000",
});
