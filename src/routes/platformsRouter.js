const { Router } = require("express");
const cors = require("cors");
const { getPlatformsDB, getPlatformsAPI } = require("../controllers/get-platforms/index.js");

const platformsRouter = Router();

platformsRouter.get("/platforms", cors(), async (req, res) => {
  try {
    const platformsDB = await getPlatformsDB();
    if(platformsDB) return res.json(platformsDB);
    await getPlatformsAPI();
    const platformsAPI = await getPlatformsDB();
    res.json(platformsAPI);
  } catch (error) {
    console.log(error);
    const error0 = "Server unable to retrieve platforms, please, try again later.";
    if(error?.response.status === 401) return res.status(503).json({msg: error0});
  };
});

module.exports = platformsRouter;