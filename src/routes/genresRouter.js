const { Router } = require("express");
const cors = require("cors");
const { getGenresDB, getGenresAPI } = require("../controllers/get-genres/index.js");

const genresRouter = Router();

genresRouter.get("/genres", cors(), async (req, res) => {
  try {
    const genresDB = await getGenresDB();
    if(genresDB) return res.json(genresDB);
    await getGenresAPI();
    const genresAPI = await getGenresDB();
    res.json(genresAPI);
  } catch (error) {
    console.log(error);
    const error0 = "Server unable to retrieve genres, please, try again later.";
    if(error?.response.status === 401) return res.status(503).json({msg: error0});
  };
});

module.exports = genresRouter;