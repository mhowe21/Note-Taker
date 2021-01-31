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

router.delete("/notes/:id", midDel, (req,res) =>{
  console.log("item delted");
})

async function mid(req, res, next){

  id = id +1;
  let obj = {id: id}
  db.push({...obj, ...req.body});
  res.json(db);
  next();

}

async function midDel(req,res,next){
  let dID = req.params.id

  for(let i = 0; i < db.length; i++){
    if(db[i].id == dID){
      db.splice(i,1);
      console.log(`item ${i} targeted`);
    }
  }
  res.json(db)
}

module.exports = router;
