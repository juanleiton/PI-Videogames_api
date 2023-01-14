const isValidUUIDV4 = require('is-valid-uuid-v4').isValidUUIDV4;
const { Videogame, Genre } = require("../../db.js");

const retrieveFromDB = async id => {
  if(!isValidUUIDV4(id)) return null;
  const rawGame = await Videogame.findByPk(id, {include: Genre});
  if(!rawGame) throw new Error("The game with the provided id no longer exists.", {cause: 404});
  const game = {
    name: rawGame.name,
    plot: rawGame.plot,
    released: rawGame.released,
    rating: rawGame.rating,
    platforms: rawGame.platforms,
    image: rawGame.image,
    genres: rawGame.genres.map(genre => {
      return genre.name;
    })
  };
  return game;
};

module.exports = retrieveFromDB;