const { Genre, Videogame } = require("../../db.js");

const updateGenres = async (id, genres) => {
  const outdatedGame = await Videogame.findByPk(id, {include: Genre});
  const genresDB = await Genre.findAll();
  const validGenres = genresDB.filter(genre => {
    return genres.includes(genre.name);
  });
  if(validGenres.length > 0) await outdatedGame?.setGenres(validGenres);
  const updatedGame = await Videogame.findByPk(id, {include: Genre});
  return updatedGame;
};

module.exports = updateGenres;