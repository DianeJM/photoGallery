const uploadFileToFirebase = (req,res,next)=>{
   const file =   req.file;
   console.log(file)
   next()
  
}

module.exports = {uploadFileToFirebase};