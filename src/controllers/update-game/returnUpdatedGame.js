const returnUpdatedGame = game => {
  const updatedGame = {
    id: game.dataValues.id,
    name: game.dataValues.name,
    plot: game.dataValues.plot,
    released: game.dataValues.released,
    rating: Number(game.dataValues.rating).toFixed(2),
    image: game.dataValues.image,
    platforms: game.dataValues.platforms,
    genres: game.dataValues.genres.map(genre => {
      return genre.name;
    })
  };
  return updatedGame;
};

module.exports = returnUpdatedGame;