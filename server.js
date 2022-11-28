const express = require("express");
const bodyparser = require("body-parser");
const serverConfig = require("./config/server.config");
const router = require("./router/index");
// const ErrorHandler = require("./middleware/middleware");
//here creating table when sever is up and running
const dbConnection = require("./config/db.config");
const Boooks = require("./model/Books");

const App = express();
App.use(router);

const init = async () => {
  await dbConnection.sync({ force: true });
  insertBoooks();
};
const insertBoooks = async () => {
  await Boooks.bulkCreate([
    {
      name: "A Better India: A Better World",
      author: "Narayana Murthy",
      description: "The book talks about the ways to fulfill Gandhi's dream",
      price: 599,
    },
    {
      name: "A Passage to India",
      author: "E.M. Foster",
      description:
        "A Passage to India' may signify a journey to India but as a matter of fact there is more then that.",
      price: 599,
    },
    {
      name: "A Revenue Stamp",
      author: "	Amrita Pritam",
      description:
        "A revenue stamp, tax stamp, duty stamp or fiscal stamp is a (usually) adhesive label used to designate collected taxes or fees on documents, tobacco.",
      price: 599,
    },
  ]);
};

App.listen(8080, () => {
  // console.log(`Serveris running on http://localhost:${serverConfig.PORT} `);
  console.log(`Serveris running on http://localhost:${8080} `);
  // init();
});
