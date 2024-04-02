//upload file

const { mkdirp } = require("mkdirp");
const multer = require("multer");

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/image/${type}`);
    
    const storage = multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null,`./public/image/${type}`);//setup cho can luu file   
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname);//dat lai ten cho file
        }
    });
    const upload = multer({ 
        storage: storage, fileFilter: function (req, file, cb) {
            const extensionImageList = [".png", ".jpg"];    
            const extension = file.originalname.slice(-4);
            const check = extensionImageList.includes(extension);//kiểm tra đuôi file có phải là jpg và png hay k
            if (check) {
                cb(null, true);
            } else {
                cb(new Errol("extension khong hop le"))
            }

        },
    });
    return upload.single(type);
}
module.exports = {
    uploadImage,
}