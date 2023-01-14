const validatePlot = (plot, games, update) => {
  const error0 = new Error("'Plot' must be between 75 and 300 characters long.", {cause: 400});
  const error1 = new Error("The game with the provided plot already exists.", {cause: 400});
  if(plot.length < 75 || plot.length > 300) throw error0;
  if(!update && games.some(game => game.plot === plot)) throw error1;
};

module.exports = validatePlot;