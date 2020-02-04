const { db } = require("../conf");
const { Character, User, Scenario, Article } = require("../models");
let data;

data = require("../../fixtures/users.json");
db.dropCollection("users");
data.map(userData => {
  const newUser = new User(userData);
  newUser.save(err => {
    if (err) {
      console.error(`Failure for User ${userData.pseudo}: ${err}`);
      return;
    }
    console.log(`User recorded: ${userData.pseudo}`);
  });
  return;
});

data = require("../../fixtures/characters.json");
db.dropCollection("characters");
data.map(charData => {
  const newChar = new Character(charData);
  newChar.save(err => {
    if (err) {
      console.error(`Failure for Character ${charData.name}: ${err}`);
      return;
    }
    console.log(`Character recorded: ${charData.name}`);
  });
  return;
});

data = require("../../fixtures/scenarii.json");
db.dropCollection("scenarios");
data.map(scenData => {
  const newScen = new Scenario(scenData);
  newScen.save(err => {
    if (err) {
      console.error(`Failure for Scenario ${scenData.title}: ${err}`);
      return;
    }
    console.log(`Scenario recorded: ${scenData.title}`);
  });
  return;
});

data = require("../../fixtures/blog.json");
db.dropCollection("articles");
data.map(blogData => {
  const newArticle = new Article(blogData);
  newArticle.save(err => {
    if (err) {
      console.error(`Failure for Article ${blogData.title}: ${err}`);
      return;
    }
    console.log(`Article recorded: ${blogData.title}`);
  });
  return;
});
