// Register logic , Accept input, check if user exists; if it does reject otherwise save to db
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

  
router.post('/',function(username,password){
    User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
})


module.exports = router;