const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;

const searchGamesAPI = async name => {
  const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
  const matches = games.data.results.map(game => {
    const summary = {
      id: game.id,
      name: game.name,
      rating: game.rating,
      image: game.background_image,
      genres: game.genres.map(genre => {
        return genre.name;
      })
    };
    return summary;
  });
  const results = matches.slice(0, 120);
  return results;
};

module.exports = searchGamesAPI;