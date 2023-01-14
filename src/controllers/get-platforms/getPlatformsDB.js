const { Platform } = require("../../db.js");

const getPlatformsDB = async () => {
  const rawPlatforms = await Platform.findAll();
  if(rawPlatforms.length < 1) return null;
  const platforms = rawPlatforms.map(platform => {
    return {
      id: platform.id,
      name: platform.name
    };
  });
  return platforms;
};

module.exports = getPlatformsDB;