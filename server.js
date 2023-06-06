const express =require('express')
const app =express()
const NotFound =require('./modalware/not-found')
const ErrorHandler =require("./modalware/Error-handler")
app.use('/',(req,res)=>{
throw new Error('error')
res.send('<h1>Mustafa Eisa Ibrehim</h1>')
})
app.use(NotFound)
app.use(ErrorHandler)
const port = 6000
app.listen(9000,()=>{
  console.log(`our server is runing on port ${port}`)

})