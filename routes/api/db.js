const router = require("express").Router();
const controller = require("../../controller/controller")

// localhost:8080/api/posts
router.route("/").get(controller.findAllPost);
// localhost:8080/api/posts/new
router.route("/new").post(controller.createNewPost);

module.exports = router;