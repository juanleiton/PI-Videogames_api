const { Videogame, Genre } = require("../../db.js");

const getGamesDB = async () => {
  const rawGames = await Videogame.findAll({include: {model: Genre}});
  const games = rawGames.map(game => {
    const summary = {
      id: game.id,
      name: game.name,
      rating: game.rating,
      image: game.image,
      genres: game.genres.map(genre => {
        return genre.name;
      })
    };
    return summary;
  });
  return games;
};

module.exports = getGamesDB;