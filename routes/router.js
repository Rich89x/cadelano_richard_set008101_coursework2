var express = require('express');
var router = express.Router();
var User = require('../models/user');
var path = require('path');
var nodemailer = require('nodemailer');

// GET route for Authentication Page
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/../Pages/Authentication.html'));
});


//POST route to Update data during Login\Register
router.post('/', function (req, res, next) {
  
  
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      password: req.body.password,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/welcome');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET route new User
router.get('/welcome', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>User: </h1>' + user.email + '<br><a type="button" href="/logout">Now you can Login</a>')
        }
      }
    });
});

//GET route after successful authentication
router.get('/profile', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/../Pages/main/main.html'));
  

});

//GET route to message page
router.get('/message', function(req, res) {
  
  return res.sendFile(path.join(__dirname + '/../Pages/message.html'));
});

//POST route to allow the Email activity
router.post('/message', function SendEmail(req, res){

var transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  secureConnection: true,  
  auth: {
    user: "coursework2.webtech@gmail.com",
    pass: "12345678@@",
  },
  
    
});

var mailOptions = {
  from: "coursework2.webtech@gmail.com",
  to: req.body.email,
  subject: 'Sending Email using Node.js',
  html: req.body.output
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});

// GET route for logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;