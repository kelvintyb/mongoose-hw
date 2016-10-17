console.log('user routes running')
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var User = require('../models/user')

// Must have at least 3 RESTful routes:
//   create, findAll, findOne /: id
router.get('/all', function(req, res) {
  User.find({}, function(err, usersArr) {
    if (err) console.log(err);
    res.render('users/index', {
      usersArr: usersArr,
      message: 'All User Info here'
    })
  })
}).get('/new', function(req, res) {
  res.render('users/create')
}).get('/:id', function(req, res) {
  User.findOne({
    name: req.params.id
  }, function(err, obj) {
    if (err) console.log(err);
    res.send(obj);
  });
})

// the only POST request
router.post('/', function(req, res) {
  var newUser = new User({
    name: req.body.newUser.name,
    password: req.body.newUser.password.length * '*',
    email: req.body.newUser.email,
    paintings: [{
      name: req.body.painting.name,
      artist: req.body.painting.artist,
      year: req.body.painting.year
    }, {
      name: req.body.painting.name2,
      artist: req.body.painting.artist2,
      year: req.body.painting.year2
    }, {
      name: req.body.painting.name3,
      artist: req.body.painting.artist3,
      year: req.body.painting.year3
    }]
  })

  newUser.save(function(err) {
    if (err) throw new Error(err)
  })
  res.send(newUser)
})

module.exports = router
