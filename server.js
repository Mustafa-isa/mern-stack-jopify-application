const express = require("express");
const dotenv = require("dotenv");
const connect =require("./db/connect")
const AuthRoute = require('./Router/AuthRoute')
dotenv.config();
const NotFound = require("./modalware/not-found");
const ErrorHandler = require("./modalware/Error-handler");
const JopsRoutes = require("./Router/JopesRoute")

// modules

const app = express();

app.use("/", (req, res) => {

  res.send("<h1>Mustafa Eisa Ibrehim</h1>");
});
app.use(express.json());
app.use(NotFound);
app.use(ErrorHandler);
// auth routes
app.use("/api/v1/auth" ,AuthRoute)
app.use("/api/v1/jop" ,JopsRoutes)
const port = 6000;


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
