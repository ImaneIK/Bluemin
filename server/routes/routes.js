const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');

//multer middlwares
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

let upload = multer({
    storage:storage,
}).single("image");

router.get("/",API.fetchAllPost);
router.get("/:id",API.fetchPostById);
router.post("/",upload,API.createpost);
router.patch("/:id",upload,API.updatepost);
router.delete("/:id",API.deletepost);





module.exports = router;