const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const plotPattern = require("../../assets/plotPattern.js");

const retrieveFromAPI = async id => {
  const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  const rawGame = response.data;
  const game = {
    name: rawGame.name,
    plot: rawGame.description.replaceAll(plotPattern, ""),
    released: rawGame.released,
    rating: rawGame.rating,
    platforms: rawGame.platforms.map(platform => {
      return platform.platform.name;
    }),
    image: rawGame.background_image,
    genres: rawGame.genres.map(genre => {
      return genre.name;
    })
  };
  return game;
};

module.exports = retrieveFromAPI;