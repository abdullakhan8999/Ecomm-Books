const express = require("express");
const BooksRoute = require("./Books.router");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.write("This is the basic route.");
  res.end();
});

router.use("/ecomm/api/v2/books", BooksRoute);
module.exports = router;
