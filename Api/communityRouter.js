const router = require("express").Router();
const knex = require("knex")
const db = require('../data/dbConf.js');


router.get("/community", (req, res) => {
    console.log("i am here");
    db("community")
      .then(community => {
        res.status(200).json(community);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post("/community", (req, res) => {
    if (!req.body.community) {
      res.status(400).json({ msg: "please provide a community" });
    } else {
      db("community")
        .insert(req.body, "id")
        .then(ids => {
          db("community")
            .where({ id: ids[0] })
            .first()
            .then(community => {
              res.status(200).json(community);
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

  router.get("/community/:id", (req, res) => {
    db("community")
      .where({ id: req.params.id })
      .first()
      .then(community => {
        if (community) {
          res.status(200).json(community);
        } else {
          res.status(404).json({ message: "no such community started yet" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;