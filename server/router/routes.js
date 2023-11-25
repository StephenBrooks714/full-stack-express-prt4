const express = require("express");
const router = express.Router();
const cache = require("../config/mcache");

const homeController = require("../controllers/homePageView");
const contactController = require("../controllers/contactPageView");
// blogs
const blogsController = require("../controllers/blogsPageView");

router.get("/", cache(2), homeController);
router.get("/contact", contactController);
router.get("/blogs", blogsController);

module.exports = router;