const router = require("express").Router();
const db = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(db);
  console.log(db);
});

router.post("/notes", (req, res) => {
  db.push(req.body);
  res.json(db);
  console.log(db);
});

module.exports = router;
