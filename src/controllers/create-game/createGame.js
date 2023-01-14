const { Videogame } = require("../../db.js");

const createGame = async (name, plot, released, rating, image, platforms) => {
  const newGame = await Videogame.create({
    name,
    plot,
    released: released !== "" ? released : null,
    rating: rating !== "" ? rating : null,
    image: image !== "" ? image : null,
    platforms
  });
  return newGame;
};

module.exports = createGame;