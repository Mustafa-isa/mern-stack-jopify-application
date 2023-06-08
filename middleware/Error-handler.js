const ErrorHandler =(err,req,res,next)=>{
  res.status(500).json({
    msg:"there is an error"
  })
  next()
}
module.exports= ErrorHandler