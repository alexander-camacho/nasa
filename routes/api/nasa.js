const router = require("express").Router();
const controller = require("../../controller/controller")

// localhost:8080/api/nasa
router.route("/").get(controller.picOfTheDay);

module.exports = router;