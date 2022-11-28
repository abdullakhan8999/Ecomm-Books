const Books = require("./../model/Books");
const sequelizeInstance = require("./../config/db.config");
// get all books

const findallbooks = async (req, res, next) => {
  const books = await Books.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(books, null, 2));
  res.end();
};

// get books by id
const findById = async (req, res, next) => {
  const id = await req.params.id;
  const books = await Books.findByPk(id);
  try {
    res.write(
      `books Id:${id} details \n${JSON.stringify(books, null, 2)}`
    );
    res.end();
  } catch (error) {
    next(error);
  }
};

//Post new books
const postbooks = async (req, res, next) => {
  try {
    //This is replaced with validation
    let booksToAdd = req.body;
    await Books.create(booksToAdd);
    res.status(201).send("New books added");
    res.end();
  } catch (err) {
    next(err);
  }
};

//Delect books by id
const deletebooks = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Books.destroy({ where: { id: id } });
    res.status(201).write("books delected");
    res.end();
  } catch (error) {
    next(error);
  }
};

//update books
const updatebooks = async (req, res, next) => {
  const id = req.params.id;
  try {
    const booksupdate = {
      name: req.body.name,
    };
    await Books.update(booksupdate, { where: { id: id } });
    const updatedbooks = await Books.findByPk(id);
    res
      .status(200)
      .write(`Updated books: ${JSON.stringify(updatedbooks, null, 2)}`);
    res.end();
  } catch (error) {
    next(error);
  }
};

const all = {
  findallbooks,
  findById,
  postbooks,
  deletebooks,
  updatebooks,
};
module.exports = all;
