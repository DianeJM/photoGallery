// modules/photos/photos.routes.js

const { Router } = require("express");
const { addPhoto, getPhoto, getPhotos, deletePhoto } = require("./photos.controllers");
const { upload } = require("../../utils/uploadFiles");

const router = Router();


router.post("/", upload.single('imageUrl'), addPhoto);
router.get("/:relatedTo", getPhoto);
router.get("/", getPhotos);
router.delete("/:uuid", deletePhoto);

module.exports = router;
