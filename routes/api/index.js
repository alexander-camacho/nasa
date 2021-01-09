const router = require("express").Router()
const nasaRoutes = require("./nasa")
const dbRoutes = require("./db")

// Separated routes
router.use("/nasa", nasaRoutes);

router.use("/posts", dbRoutes);

module.exports = router