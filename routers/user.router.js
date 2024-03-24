const express = require("express");

const { register, login } = require("../controllers/users.controller")

const userRouter = express.Router();

//upload file
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./public/image/avatar");//setup cho can luu file   
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);//dat lai ten cho file
    }
});
const upload = multer({ storage: storage })

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/upload-avatar", upload.single('avatars'), (req, res) => {
    res.send("da chay thanh cong")
})
module.exports = {
    userRouter,
}   