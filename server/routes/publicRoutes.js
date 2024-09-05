// publicRoutes.js

const express = require("express");
const router = express.Router();
const API = require("../controllers/api"); // Adjust the path as necessary

// Public route to fetch all posts
router.get("/posts", API.fetchAllPostsPublic);


router.get("/posts/:id", API.fetchPublicPostById);


module.exports = router;
