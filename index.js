// index.js

const express = require("express");
const cors = require("cors");
const PhotosRoutes = require("./modules/photos/photos.routes");
const { swaggerUi, swaggerSpec } = require('./swagger');
const bodyParser = require('body-parser');

// Initialise Express
const app = express();

var whitelist = ['http://localhost:5000','http://localhost:3000', 'http://localhost:6000','https://photogallery-1mof.onrender.com/'];
const corsOptions = { 
  origin: whitelist,
  optionsSuccessStatus: 200,
};

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.text({ type: "/" }));
app.use("/files", express.static("files"));
app.use("/photos", PhotosRoutes);

// Serve Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(50, () => {
  try {
    console.log("server is running on port 50");
    console.log("API docs available at http://localhost:50/api-docs");
  } catch (error) {
    console.log(error);
  }
});
