const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;

const getGamesAPI = async () => {
  const response1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`);
  const response2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`);
  const response3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=40`);
  const rawGames = [...response1.data.results, ...response2.data.results, ...response3.data.results];
  const games = rawGames.map(game => {
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
  return games;
};

module.exports = getGamesAPI;