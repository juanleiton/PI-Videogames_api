// const { Platform } = require("../../db.js");

const addPlatforms = async (newGame, platforms) => {
  const platformsDB = await Platform.findAll();
  const validPlatforms = platformsDB.filter(platform => {
    return platforms.includes(platform.name);
  });
  if(validPlatforms.length > 0) await newGame.addPlatforms(validPlatforms);
};

module.exports = addPlatforms;