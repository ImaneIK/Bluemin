const mongoose = require('mongoose');   

const postSchema = mongoose.Schema({
    title:String,
    category:String,
    content:String,
    image:String,
    created:{
        type:Date,
        defaul:Date.now
    }
});

module.exports = mongoose.model("Post",postSchema)