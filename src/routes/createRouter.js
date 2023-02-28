const { Router } = require("express");
const cors = require("cors");
// const fileUpload = require("express-fileupload");
const { addGenres, createGame, returnCreatedGame, validateGame } = require("../controllers/create-game/index.js");

const createRouter = Router();
// createRouter.use(fileUpload());

createRouter.options("/videogame", cors());

createRouter.post("/videogame", cors(), async (req, res) => {
  try {
    const { name, plot, released, rating, image, platforms, genres } = req.body;
    await validateGame(name, plot, released, rating, image, platforms, genres);
    const newGame = await createGame(name, plot, released, rating, image, platforms);
    const outdatedGame = await addGenres(newGame, genres);
    const updatedGame = returnCreatedGame(outdatedGame);
    // await addPlatforms(newGame, platforms);
    res.status(201).json({msg: "Game successfully created.", added: updatedGame});
  } catch (error) {
    console.log(error);
    if(error?.cause === 400) return res.status(400).json({msg: error.message});
  };
});

module.exports = createRouter;