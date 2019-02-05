const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let public = [
    {
      "_id": "1",
      "name": "Rohit Sharma",
      "description": "Hitman Of India",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Rohit Sharma",
      "description": "Hitman Of India",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Rohit Sharma",
      "description": "Hitman Of India",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Rohit Sharma",
      "description": "Hitman O f India",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Rohit Sharma",
      "description": "Hitman Of India",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Rohit Sharma",
      "description": "Hitman Of India",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(public)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Virat Kohli",
      "description": "Greatest Player",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Virat Kohli",
      "description": "Greatest Player",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Virat Kohli",
      "description": "Greatest Player",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Virat Kohli",
      "description": "Greatest Player",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Virat Kohli",
      "description": "Greatest Player",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Virat Kohli",
      "description": "Greatest Player",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})



router.post('/login', (req, res) => {
  let userData = req.body
  if('admin' == userData.email && 'admin' == userData.password){
         let payload = {subject: userData._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
  }
  else{
    console.log('invalid username and password')
  }
  
})

module.exports = router;