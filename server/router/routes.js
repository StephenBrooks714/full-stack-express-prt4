const express = require("express");
const router = express.Router();
const cache = require("../config/mcache");

const homeController = require("../controllers/homePageView");
const contactController = require("../controllers/contactPageView");
// blogs
const newPostController = require("../controllers/newPostData");
const storePostController = require("../controllers/storePostData");
const blogsController = require("../controllers/blogsPageView");
const postController = require("../controllers/postData");
const deletePostController = require("../controllers/deletePost");
// feature
const newFeatureController = require("../controllers/newFeaturePage");
const storeFeatureController = require("../controllers/storeFeaturePost");
const featuresController = require("../controllers/featruesPageData");
const featureController = require("../controllers/featurePagePost");
const deleteFeatureController = require("../controllers/deleteFeaturePost");
// projects
const newProjectController = require("../controllers/newProjectPage");
const storeProjectController = require("../controllers/storeProjectAction");
const projectsController = require("../controllers/projectsPage");
const projectController = require("../controllers/projectData");
const deleteProjectController = require("../controllers/deleteProjectDB");

router.get("/", cache(2), homeController);
router.get("/contact", contactController);
// blogs
router.get("/newPost", newPostController);
router.post("/store/post", storePostController);
router.get("/blogs", cache(2), blogsController);
router.get("/post/:id", postController);
router.get("/delete/post/:id", deletePostController);
// features
router.get("/newFeature", newFeatureController);
router.post("/store/feature", storeFeatureController);
router.get("/features", featuresController);
router.get("/feature/:id", featureController);
router.get("/delete/feature/:id", deleteFeatureController);
// projects
router.get("/newProject", newProjectController);
router.get("/store/project", storeProjectController);
router.get("/projects", projectsController);
router.get("/project/:id", projectController);
router.get("/delete/project/:id", deleteProjectController);

module.exports = router;