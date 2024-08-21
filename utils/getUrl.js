module.exports.getUrl = (req) => {
    return "https://photogallery-1mof.onrender.com/" + req.file.path;
  };