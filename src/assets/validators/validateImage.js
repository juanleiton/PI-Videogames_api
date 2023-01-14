const imagePattern = require("../imagePattern.js");

const validateImage = (image, games, update) => {
  const error0 = new Error("If provided, 'Image' must be an URL.", {cause: 400});
  const error1 = new Error("If provided, 'Image' must be between 30 and 300 characters long.", {cause: 400});
  const error2 = new Error("The game with the provided URL already exists.", {cause: 400});
  if(image === "") return;
  if(!imagePattern.test(image)) throw error0;
  if(image.length < 30 || image.length > 300) throw error1;
  if(!update && games.some(game => game.image === image)) throw error2;
};

module.exports = validateImage;