
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require('./universalModel.js');
const secrets = require('../helpers/secrets.js')


router.post("/register", (req, res) => {
    let user = req.body;
  
    if (!user.username || !user.name || !user.password || !user.country) {
        res.status(404).json({error: 'Please send username, name, password and country'})
    }
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        console. error(error)
        res.status(500).json(error);
      });
  });

  router.post('/login', (req, res) => {
      console.log('i am here')
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) { 
         const token = generateToken(user);
          res.status(200).json({
            userId: user.id,
            userType: user.userType,
            token: token
            // message: `Welcome ${user.username}!`,
            // token,
           
          });
        } else {
          res.status(401).json({ message: 'I Shall not pass' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username
    };
    const options = {
      expiresIn: "1d"
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
  }
  
 


module.exports = router;