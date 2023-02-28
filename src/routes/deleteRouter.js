const { Router } = require("express");
const cors = require("cors");
// const fileUpload = require("express-fileupload");
const { deleteGame } = require("../controllers/delete-game/index.js");

const deleteRouter = Router();
// createRouter.use(fileUpload());

deleteRouter.options("/videogame/:id", cors());

deleteRouter.delete("/videogame/:id", cors(), async (req, res) => {
  try {
    const { id } = req.params;
    await deleteGame(id);
    res.json({msg: "Game successfully deleted."});
  } catch (error) {
    console.log(error);
    if(error.cause === 403) return res.status(403).json({msg: error.message});
    if(error.cause === 404) return res.status(404).json({msg: error.message});
  };
});

module.exports = deleteRouter;