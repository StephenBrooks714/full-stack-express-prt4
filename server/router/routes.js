const express = require("express");
const router = express.Router();
const cache = require("../config/mcache");

const homeController = require("../controllers/homePageView");

router.get("/", cache(2), homeController);

module.exports = router;