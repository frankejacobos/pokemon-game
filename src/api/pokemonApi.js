import axios from "axios";
import API_URL from "../constants.js";

const pokemonApi = axios.create({
  baseURL: API_URL,
});

export default pokemonApi;
