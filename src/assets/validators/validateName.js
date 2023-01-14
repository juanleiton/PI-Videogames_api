const validateName = (name, games, update) => {
  const error0 = new Error("'Name' must be between 3 and 75 characters long.", {cause: 400});
  const error1 = new Error(`The game with the name '${name}' already exists.`, {cause: 400});
  if(name.length < 3 || name.length > 75) throw error0;
  if(!update && games.some(game => game.name === name)) throw error1;
};

module.exports = validateName;