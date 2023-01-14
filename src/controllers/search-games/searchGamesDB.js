const { Videogame, Genre } = require ("../../db.js");

const searchGamesDB = async name => {
  const games = await Videogame.findAll({include: {model: Genre}});
  const rawMatches = games.filter(game => {
    return game.name.includes(name);
  });
  const matches = rawMatches.map(game => {
    const summary = {
      id: game.id,
      name: game.name,
      rating: game.rating,
      image: null,
      genres: game.genres.map(genre => {
        return genre.name;
      })
    };
    return summary;
  });
  const results = matches.slice(0, 120);
  return results;
};

module.exports = searchGamesDB;