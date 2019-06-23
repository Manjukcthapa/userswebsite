const router = require("express").Router();
const knex = require("knex");
const db = require('../data/dbConf.js');


router.get("/children", (req, res) => {
    console.log("i am here");
    db("children")
      .then(children => {
        res.status(200).json(children);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post("/children", (req, res) => {
      let children = req.body
    if (!children.name|| !children.age||!children.location||!children.screendate||!children.height||! children.weight)
   
    {
      res.status(400).json({ msg: "please provide a name,age,location,screendate,height,weight" });
    } else {
      db("children")
        .insert(req.body)
        .then(ids => {
          db("children")
            .where({ id: ids[0] })
            .first()
            .then(children => {
              res.status(200).json(children);
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

  router.get("/children/:id", (req, res) => {
    db("children")
      .where({ id: req.params.id })
      .first()
      .then(children => {
        if (children) {
          res.status(200).json(children);
        } else {
          res.status(404).json({ message: "no such children started yet" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;