const { Videogame } = require("../../db.js");

const updateGame = async (id, name, plot, released, rating, image, platforms) => {
  const gameExists = await Videogame.findByPk(id);
  if(!gameExists) throw new Error("The game with the provided id does not exist.", {cause: 404});
  await gameExists?.update({
    name: name,
    plot: plot,
    released: released !== "" ? released : null,
    rating: rating !== "" ? rating : null,
    image: image !== "" ? image : null,
    platforms: platforms
  });
};

module.exports = updateGame;