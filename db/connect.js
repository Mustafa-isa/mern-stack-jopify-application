const mongoose = require("mongoose");

const connect = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Could not connect to database", err));
};
module.exports =connect