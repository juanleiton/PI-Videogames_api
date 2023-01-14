const { Videogame, Genre, Platform } = require("../../db.js");
const { validateName, validatePlot, validateReleased, 
  validateRating, validateImage, validatePlatforms,
  validateGenres } = require("../../assets/validators/index.js");

const validateGame = async (name, plot, released, rating, image, platforms, genres) => {
  const allGames = await Videogame.findAll();
  const allGenres = await Genre.findAll();
  const allPlatforms = await Platform.findAll();
  validateName(name, allGames);
  validatePlot(plot, allGames);
  validateReleased(released);
  validateRating(rating);
  validateImage(image, allGames);
  validatePlatforms(platforms, allPlatforms);
  validateGenres(genres, allGenres);
};

module.exports = validateGame;