const { Genre, Videogame } = require("../../db.js");

const addGenres = async (newGame, genres) => {
  const genresDB = await Genre.findAll();
  const validGenres = genresDB.filter(genre => {
    return genres.includes(genre.name);
  });
  if(validGenres.length > 0) await newGame.addGenres(validGenres);
  const createdGame = await Videogame.findByPk(newGame.id, {include: Genre});
  return createdGame;
};

module.exports = addGenres;