// import dependencies
const express = require("express");
const cors = require("cors");
const PhotosRoutes = require("./modules/photos/photos.routes");

// initialise Express
const app = express();
const bodyParser  = require('body-parser')

var whitelist = ['http://localhost:5000', 'http://localhost:6000']
const corsOptions =  { 
  origin: whitelist,
  optionsSuccessStatus: 200,
};
 
//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.text({type:"/"}))
app.use("/files",express.static("files"));
app.use("/photos", PhotosRoutes);

// start server
app.listen(50, () => {
  try {
    console.log("server is running on port 50");
  } catch (error) {
    console.log(error);
  }
});
