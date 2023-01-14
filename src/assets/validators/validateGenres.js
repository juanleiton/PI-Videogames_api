const validateGenres = (genres, allGenres) => {
  const allGenreNames = allGenres.map(genre => genre.name);
  const error0 = new Error("All values must be valid gaming genres.", {cause: 400});
  if(genres.length < 1) return;
  if(!genres.every(genre => allGenreNames.includes(genre))) throw error0;
};

module.exports = validateGenres;