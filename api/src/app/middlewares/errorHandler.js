require("express-async-errors");

module.exports = (error, req, res, next) => {
    console.log("########## Error Handler ##########");
    console.log(error);
    res.sendStatus(500);
  }