const express = require("express");
const router = express.Router();
const multer = require("multer");
const API = require("../controllers/api"); // Adjust the path as necessary
const checkJwt = require('../middleware'); // Adjust the path as needed


// Set up multer for file uploads (assuming images are being uploaded)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "https://bluemin.onrender.com/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Define routes
router.get("/", API.fetchAllPost);  // Fetch all posts
router.get("/:id", API.fetchPostById);  // Fetch post by ID
router.post("/", upload.single("image"), API.createpost);  // Create a new post with image upload
router.patch("/:id", upload.single("image"), API.updatepost);  // Update a post with image upload
router.delete("/:id", API.deletepost);  // Delete a post

module.exports = router;
