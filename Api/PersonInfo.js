const router = require("express").Router();
const knex = require("knex")
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig[process.env.NODE_ENV]);


router.get("/personinfo", (req, res) => {
    console.log("i am here");
    db("personinfo")
      .then(personinfo => {
        res.status(200).json(personinfo);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post("/personinfo", (req, res) => {
      let info = req.body
    if (!info.date || !info.weight|| !info.height|| !info.name_id) {
      res.status(400).json({ msg: "please provide a date,weight,height,name_id" });
    } else {
      db("personinfo")
        .insert(req.body, "id")
        .then(ids => {
          db("personinfo")
            .where({ id: ids[0] })
            .first()
            .then(personinfo => {
              res.status(200).json(personinfo);
            })
            .catch(err => {
              res.status(500).json(err);
            });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  });

  router.get("/country/:id", (req, res) => {
    db("personinfo")
      .where({ id: req.params.id })
      .first()
      .then(personinfo => {
        if (personinfo) {
          res.status(200).json(personinfo);
        } else {
          res.status(404).json({ message: "no such country started yet" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;