const { Router } = require("express");
const cors = require("cors");
const { getGamesAPI, getGamesDB } = require("../controllers/get-games/index.js");
const { searchGamesAPI, searchGamesDB } = require("../controllers/search-games/index.js");

const homeRouter = Router();

homeRouter.get("/videogames", cors(), async (req, res) => {
  try {
    const { name } = req.query;
    if(name && name.length > 1) {
      const searchAPI = await searchGamesAPI(name);
      const searchDB = await searchGamesDB(name);
      const search = [...searchAPI, ...searchDB].slice(0, 120);
      if(search.length < 1) return res.status(404).json({msg: "Your search did not return any results."});
      return res.json(search);
    };
    const gamesAPI = await getGamesAPI();
    const gamesDB = await getGamesDB();
    const games = [...gamesAPI, ...gamesDB];
    res.json(games);
  } catch (error) {
    console.log(error);
    const errorStatus = error.response.status;
    const errorMessage0 = "Service currently not available, please, try again later";
    if(errorStatus === 401) res.status(503).json({msg: errorMessage0});
  };
});

module.exports = homeRouter;