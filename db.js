const mongoose = require("mongoose");

function connectdb(uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("successful connected to MongoDB");
    })
    .catch((err) => {
      console.log("failed to connec to MongoDB", err.message);
    });
}

module.exports = connectdb;
