const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const { Platform } = require("../../db.js");

const getPlatformsAPI = async () => {
  const response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
  const rawPlatforms = response.data.results.map(platform => {
    return {
      name: platform.name
    };
  });
  await Platform.bulkCreate(rawPlatforms);
};

module.exports = getPlatformsAPI;