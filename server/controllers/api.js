// const Post = require("../models/posts");
const fs = require("fs");
const { connectDB } = require('../db'); // Assuming you have a connectDB function in a db.js file
const { ObjectId } = require('mongodb');

module.exports = class API {

    // New function to fetch all posts for public access
    static async fetchAllPostsPublic(req, res) {
        try {
            const db = await connectDB(); // Get the connected database instance
            const postsCollection = db.collection("posts");
            const posts = await postsCollection.find().toArray();// Fetch all posts
            res.status(200).json(posts);
        } catch (err) {
            console.error("Failed to retrieve posts:", err.message);
            res.status(500).json({ error: "Failed to retrieve posts" });
        }
    }


        // New function to fetch a specific post for public access
        static async fetchPublicPostById(req, res) {
            const id = req.params.id;
            try {
                const db = await connectDB();
                console.log("inside fetch by id: connection established")
                const post = await db.collection("posts").findOne({ _id: new ObjectId(id)}); // Fetch post by ID
                console.log("post selected successfully ")
                if (!post) {
                    console.log("post selected not found")
                    return res.status(404).json({ message: "Post not found" });
                }
                res.status(200).json(post);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }

    // Fetch all posts
    static async fetchAllPost(req, res) {

        // if (!req.user) {
        //     return res.status(401).json({ message: 'Unauthorized' });
        // }
    
        // const userId = req.user.sub;
        try {
            console.log("before fetching");
            
            console.log("user id:",req.auth.sub);

            const db = await connectDB(); // Get the connected database instance
            const postsCollection = db.collection("posts");
            const posts = await postsCollection.find({ author: req.auth.sub }).toArray();// Fetch all posts
            console.log("after fetching");
            res.status(200).json(posts); // Return the posts as JSON
        } catch (err) {
            console.log("error fetching", err);
            res.status(404).json({ message: err.message });
        }
    }

    // Fetch post by ID
    static async fetchPostById(req, res) {
        const id = req.params.id;
        console.log(id)
        console.log("backend: inside fetch post by id" )
        try {
            const db = await connectDB();
            console.log("inside fetch by id: connection established")
            const post = await db.collection("posts").findOne({ _id: new ObjectId(id),author: req.auth.sub }); // Fetch post by ID
            console.log("post selected successfully ")
            if (!post) {
                console.log("post selected not found")
                return res.status(404).json({ message: "Post not found" });
            }
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Create a post
    static async createpost(req, res) {

        const { title, category, content } = req.body;
        const author = req.auth.sub; // Retrieve the author from the authenticated user's JWT

        const imagename = req.file.filename;

        const newPost = {
            title,
            category,
            content,
            image: imagename,
            author, // Include the author ID
            createdAt: new Date(),
        };


        // const post = req.body;
        
        // post.image = imagename;
        try {
            const db = await connectDB();
            await db.collection("posts").insertOne(newPost); // Create a new post
            res.status(201).json({ message: "Post created successfully" });

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Update a post
    static async updatepost(req, res) {
        const id = req.params.id;
        let new_image = "";
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image); // Delete old image
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;

        try {
            const db = await connectDB();
            const result = await db.collection("posts").updateOne(
                { _id: new ObjectId(id) },
                { $set: newPost }
            ); // Update the post
            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "Post not found" });
            }
            res.status(200).json({ message: "Post updated successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Delete a post
    static async deletepost(req, res) {
        const id = req.params.id;
        try {
            const db = await connectDB();
            const result = await db.collection("posts").findOneAndDelete({ _id: new ObjectId(id) }); // Delete the post
            if (!result.value) {
                return res.status(404).json({ message: "Post not found" });
            }
            if (result.value.image) {
                try {
                    fs.unlinkSync('./uploads/' + result.value.image); // Delete associated image
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};
