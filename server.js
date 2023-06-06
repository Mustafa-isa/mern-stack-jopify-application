const express =require('express')
const app =express()



app.use('/',(req,res)=>{

res.send('<h1>Mustafa Eisa Ibrehim</h1>')
})
const port = 6000
app.listen(9000,()=>{
  console.log(`our server is runing on port ${port}`)

})