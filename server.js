const express = require("express");
const dotenv = require("dotenv");
const connect =require("./db/connect")
const AuthRoute = require('./Router/AuthRoute')
dotenv.config();
const NotFound = require("./middleware/not-found");
const ErrorHandler = require("./middleware/Error-handler");
const JopsRoutes = require("./Router/JopesRoute")
const port = 6000;
// middleware


const app = express();

app.use(express.json());

app.use("/api/v1/auth" ,AuthRoute)
app.use("/api/v1/jop" ,JopsRoutes)
app.use(NotFound);
app.use(ErrorHandler);

// auth routes




// connect database and server

const startApp =async =>{

try{
connect(process.env.DB_STRING)
app.listen(port, () => {
  console.log(`our server is runing on port ${port}`);
});
}catch(err){

  console.log(err)
}

  
}

startApp()
