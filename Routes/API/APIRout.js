const router = require("express").Router();
const db = require("../../db/db.json");
let id = 0;

router.get("/notes", (req, res) => {
  res.json(db);
  console.log(db);
});

router.post("/notes", mid, (req, res) => {
  console.log(db);
});

async function mid(req, res, next){

  id = id +1;
  let obj = {id: id}
  db.push({...obj, ...req.body});
  res.json(db);
  next();


}

module.exports = router;
