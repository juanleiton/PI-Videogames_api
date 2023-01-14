const { Genre } = require("../../db.js");

const getGenresDB = async () => {
  const rawGenres = await Genre.findAll();
  if(rawGenres.length < 1) return null;
  const genres = rawGenres.map(genre => {
    return {
      id: genre.id,
      name: genre.name
    };
  });
  return genres;
};

module.exports = getGenresDB;