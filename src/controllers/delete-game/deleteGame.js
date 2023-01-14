const { Videogame } = require("../../db.js");
const isValidUUIDV4 = require('is-valid-uuid-v4').isValidUUIDV4;

const deleteGame = async id => {
  const canBeDeleted = isValidUUIDV4(id);
  if(!canBeDeleted) throw new Error("Only user-created games can be deleted.", {cause: 403});
  const gameExists = await Videogame.findByPk(id);
  if(!gameExists) throw new Error("The game with the provided id does not exist.", {cause: 404});
  await Videogame.destroy({where: {id: id}});
};

module.exports = deleteGame;