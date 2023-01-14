const { Router } = require("express");
const { returnUpdatedGame, updateGame, updateGenres, validateGame } = require("../controllers/update-game/index.js");

const updateRouter = Router();

updateRouter.put("/videogame/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, plot, released, rating, image, platforms, genres } = req.body;
    await validateGame(name, plot, released, rating, image, platforms, genres);
    await updateGame(id, name, plot, released, rating, image, platforms);
    const outdatedGame = await updateGenres(id, genres);
    // await updatePlatforms(updatedGame, platforms);
    const updatedGame = returnUpdatedGame(outdatedGame);
    res.status(200).json({msg: "Game successfully updated.", updated: updatedGame});
  } catch (error) {
    console.log(error);
    const error0 = "Service currently not available, please, try again later";
    if(error?.cause === 400) return res.status(400).json({msg: error.message});
    if(error?.cause === 404) return res.status(404).json({msg: error.message});
    if(error?.response.status === 401) return res.status(503).json({msg: error0});
  };
});

module.exports = updateRouter;