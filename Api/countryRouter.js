const router = require("express").Router();
const knex = require("knex")
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);


router.get("/country", (req, res) => {
    console.log("i am here");
    db("country")
      .then(country => {
        res.status(200).json(country);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post("/country", (req, res) => {
    if (!req.body.country) {
      res.status(400).json({ msg: "please provide a country" });
    } else {
      db("country")
        .insert(req.body, "id")
        .then(ids => {
          db("country")
            .where({ id: ids[0] })
            .first()
            .then(country => {
              res.status(200).json(country);
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
    db("country")
      .where({ id: req.params.id })
      .first()
      .then(country => {
        if (country) {
          res.status(200).json(country);
        } else {
          res.status(404).json({ message: "no such country started yet" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;