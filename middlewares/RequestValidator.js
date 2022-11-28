const Books = require("./../model/Books");

const bodyValidtor = async (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: "Body is required",
    });
  }
  next();
};

const IdValidtor = async (req, res, next) => {
  const id = req.params.id;
  if (id) {
    const item = await Books.findByPk(id);
    if (!item) {
      res.status(404).write(`Id: ${id} dose not exist.`);
      res.end();
    }
  }
  next();
};

const validator = {
  bodyValidtor,
  IdValidtor,
};

module.exports = validator;
