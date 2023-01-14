const { Router } = require("express");
const { retrieveFromDB, retrieveFromAPI } = require("../controllers/get-detail/index.js");

const detailRouter = Router();

detailRouter.get("/videogame/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const gameDB = await retrieveFromDB(id);
    if(gameDB) return res.json(gameDB);
    const gameAPI = await retrieveFromAPI(id);
    res.json(gameAPI);
  } catch (error) {
    console.log(error);
    const error0 = "Service currently not available, please, try again later";
    if(error?.cause === 404) return res.status(404).json({msg: error.message});
    if(error?.response.status === 401) return res.status(503).json({msg: error0});
  };
});

module.exports = detailRouter;