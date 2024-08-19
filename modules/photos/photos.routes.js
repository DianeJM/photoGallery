const { Router } = require("express");
const { addPhoto, getPhoto, getPhotos} = require("./photos.controllers");
const { upload } = require("../../utils/uploadFiles");

const router = Router();

router.post("/", upload.single('imageUrl'), addPhoto);
router.get("/:relatedTo", getPhoto);
router.get("/", getPhotos);

module.exports = router;