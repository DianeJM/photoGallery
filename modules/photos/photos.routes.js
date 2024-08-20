// modules/photos/photos.routes.js

const { Router } = require("express");
const { addPhoto, getPhoto, getPhotos } = require("./photos.controllers");
const { upload } = require("../../utils/uploadFiles");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Photos
 *   description: API for managing photos
 */

/**
 * @swagger
 * /photos:
 *   post:
 *     summary: Add a new photo
 *     tags: [Photos]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 format: binary
 *               relatedTo:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Photo added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 imageUrl:
 *                   type: string
 *                 relatedTo:
 *                   type: string
 *                 category:
 *                   type: string
 */
router.post("/", upload.single('imageUrl'), addPhoto);

/**
 * @swagger
 * /photos/{relatedTo}:
 *   get:
 *     summary: Get photos by relatedTo
 *     tags: [Photos]
 *     parameters:
 *       - in: path
 *         name: relatedTo
 *         required: true
 *         schema:
 *           type: string
 *         description: The related identifier
 *     responses:
 *       200:
 *         description: A list of photos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   imageUrl:
 *                     type: string
 *                   relatedTo:
 *                     type: string
 *                   category:
 *                     type: string
 */
router.get("/:relatedTo", getPhoto);

/**
 * @swagger
 * /photos:
 *   get:
 *     summary: Get all photos
 *     tags: [Photos]
 *     responses:
 *       200:
 *         description: A list of all photos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   imageUrl:
 *                     type: string
 *                   relatedTo:
 *                     type: string
 *                   category:
 *                     type: string
 */
router.get("/", getPhotos);

module.exports = router;
