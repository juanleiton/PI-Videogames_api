const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const homeRouter = require("./homeRouter.js");
const deleteRouter = require("./deleteRouter.js");
const detailRouter = require("./detailRouter.js");
const createRouter = require("./createRouter.js");
const genresRouter = require("./genresRouter.js");
const platformsRouter = require("./platformsRouter.js");
const updateRouter = require("./updateRouter.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", homeRouter);
router.use("/", deleteRouter);
router.use("/", detailRouter);
router.use("/", createRouter);
router.use("/", genresRouter);
router.use("/", platformsRouter);
router.use("/", updateRouter);

module.exports = router;