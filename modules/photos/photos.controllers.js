const { Photo } = require("../../models");
const { getUrl } = require("../../utils/getUrl");
const { successResponse, errorResponse } = require("../../utils/responses");
const { storage } = require("../../utils/firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const fs = require('fs');
//add one photo
const addPhoto = async (req, res) => {
  try {
    const file = req.file;
    const storageRef = ref(storage, `/images/${file.originalname}`);
    const fileBuffer = fs.readFileSync(file.path);
    const snapshot = await uploadBytes(storageRef, fileBuffer)
    const imageUrl = await getDownloadURL(storageRef)    
    const { relatedTo, category } = req.body;

    const response = await Photo.create({
      imageUrl,
      relatedTo,
      category
    });
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

//get an added photo by relatedTo
const getPhoto = async (req, res) => {
  try {
    const { relatedTo } = req.params;

    const response = await Photo.findAll({
      where: {
        relatedTo: relatedTo,
      },
    });
    successResponse(res, response);
  } catch (error) {
    console.log("error", error);
    errorResponse(res, error);
  }
};
const deletePhoto = async (req, res) => {
  try {
    const { uuid } = req.params;
    const photo = await Photo.findOne({
      where: { uuid },
    });
    const response = await photo.destroy();
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

//get all photos
const getPhotos = async (req, res) => {
  try {
    const response = await Photo.findAll({});
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

module.exports = { addPhoto, getPhoto, getPhotos, deletePhoto };
