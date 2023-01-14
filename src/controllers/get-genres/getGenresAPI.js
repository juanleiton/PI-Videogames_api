const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require("../../db.js");

const getGenresAPI = async () => {
  const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const rawGenres = response.data.results.map(genre => {
    return {
      name: genre.name
    };
  });
  await Genre.bulkCreate(rawGenres);
};

module.exports = getGenresAPI;