const express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const connection = require("../models/db");
const Grid = require("gridfs-stream");
const upload = require("../models/upload");

let gfs;
connection();

const conn = mongoose.connection;

conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

//This will return back the url that will be used in saving in the user record
//Postman: http://localhost:3000/upload/ then select Body, in KEY,  select File in dropdown.  In Value, click Select Files, then select your file
router.post("/", upload.single("file"), async (req, res) => {
    if (req.file === undefined) {
        return res.send("you must select a file.");
    }

    console.log("req.file.filename = ", req.file.filename);

    const imageUrl = `http://localhost:3000/upload/file/${req.file.filename}`;

    console.log("imageUrl = ", imageUrl);

    return res.send({imageUrl});
});

//Postman: http://localhost:3000/upload/file/1627524785396-any-name-7l961jY.png
router.get("/file/:filename", async (req, res) => {

    console.log("inside get by filename")
    console.log("filename = ", req.params.filename)
    
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});

router.delete("/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

module.exports = router;