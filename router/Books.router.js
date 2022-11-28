const express = require("express");
const router = express.Router();
const BookController = require("./../controller/books.controller");
const validator = require("./../middlewares/RequestValidator");
// /ecomm/api/v2/books

// get all books
router.get("/", BookController.findallbooks);

// get books by id
router.get("/:id", [validator.IdValidtor], BookController.findById);

//Add new element
router.post("/", [validator.bodyValidtor], BookController.postbooks);
//Delect books
router.delete("/:id", [validator.IdValidtor], BookController.deletebooks);
//update books
router.put(
  "/:id",
  [validator.IdValidtor, validator.bodyValidtor],
  BookController.updatebooks
);
module.exports = router;
