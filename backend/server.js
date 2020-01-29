const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const { backendPort } = require("./conf");

/* ------------------------------------------------------------- Tools */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

/* ------------------------------------------------------------- 404 and server launch */
app.use((req, res, next) => {
  const msg = `Page not found: ${req.url}`;
  console.error(msg);
  res.status(404).send(msg);
});

app.listen(backendPort, () => {
  console.log(`API root available at: http://localhost:${backendPort}/`);
});
