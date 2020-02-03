const mongoose = require("mongoose");
const pino = require("pino");
const expressPino = require("express-pino-logger");
require("dotenv").config();

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || "42";
const dbName = process.env.DB_NAME || "toto";
const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;
mongoose.connect(dbUrl, { useNewUrlParser: true });

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const expressLogger = expressPino({ logger });

module.exports = {
  db: mongoose.connection,
  jwt: {
    secret: process.env.JWT_SECRET || "plz_change_this",
    saltRound: process.env.JWT_SALTROUNDS || "20",
    ttl: process.env.JWT_TTLHOURS || "10000"
  },
  backendPort: process.env.BACKEND_PORT || "4242",
  logger,
  expressLogger
};
