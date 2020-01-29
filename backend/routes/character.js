const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Character } = require("../models");

router.get("/", (req, res) => {
  let criteria = {};

  // Search by one specific field
  if (req.query.name) {
    criteria.name = req.query.name;
  }

  // Search everywhere
  if (req.query.search) {
    let search = req.query.search;
    criteria = {
      $or: [{ name: { $regex: search } }, { baseline: { $regex: search } }]
    };
  }

  // Pagination
  perPage = 10;
  page = req.query.page || 0;

  Character.find(
    criteria,
    {},
    { skip: page * perPage, limit: perPage },
    (err, characters) => {
      if (err) {
        logger.debug(`Tech error while scanning characters`);
        return res.status(500).send("Internal server error");
      }
      if (!characters) {
        logger.debug(`Sent back an empty set of characters`);
        return res.status(204).send("Characters not found");
      }
      logger.debug(`Sent some characters`);
      return res.json(characters);
    }
  );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Character.findById(id, (err, character) => {
    if (err) {
      logger.debug(`Tech error while searching character`);
      return res.status(500).send("Internal server error");
    }
    if (!character) {
      logger.debug(`Found no matching character`);
      return res.status(204).send("Character not found");
    }
    logger.debug(`Sent said character`);
    return res.json(character);
  });
});

/* ------------------------------------------------------------- Auth Wall */
router.use((req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) {
      logger.debug(`Tech error while checking auth`);
      return res.status(500).send(err, info);
    }
    if (!user) {
      logger.debug(`Debunked on auth`);
      return res.status(401).send("Unauthorized !");
    }
    next();
  })(req, res);
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const data = req.body;
    const newCharacter = new Character(data);
    newCharacter.save(err => {
      if (err) {
        logger.debug(`Error on character creation`);
        return res.status(400).send("Invalid Character creation request");
      }
      logger.debug(`Created a new character`);
      return res.status(201).send(data);
    });
  }
);

module.exports = router;
