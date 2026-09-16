const express=require("express")
const path=require("path")
const multer = require("multer");

const app=express();

const PORT = 3001;

// serve public folder here
app.use(express.static(path.join(__dirname, "public")));
// upload endpoint will go here

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload_images/");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("image"), (req, res) => {
    res.json({
        message: "Image uploaded successfully",
        file: req.file
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
