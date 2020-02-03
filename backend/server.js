const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const { backendPort, logger, expressLogger } = require("./conf");

/* ------------------------------------------------------------- Tools */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(expressLogger);

app.use((req, res, next) => {
  logger.debug(`Request for: ${req.url}`);
  next();
});

/* ------------------------------------------------------------- Routes */
app.use("/characters", require("./routes/character"));

/* ------------------------------------------------------------- 404 and server launch */
app.use((req, res, next) => {
  const msg = `Page not found: ${req.url}`;
  logger.debug(msg);
  res.status(404).send(msg);
});

app.listen(backendPort, () => {
  logger.debug(`API root available on port #${backendPort}/`);
});
