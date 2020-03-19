const db = require('../../../_helpers/db');
const Staff = db.Staff
const mongodb = require('mongodb');
const express = require('express');
const mongoose = require ('mongoose')
const router = express.Router();

    // Get all Staff
router.get('/',async (req, res) => {
    const allStaff = await loadCollection();
    res.send(await allStaff.find({}).toArray());
});
    // Add Staff
router.post('/', (req, res) => {
    
    const newStaff = new Staff({
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        startDate: new Date()
    });
    newStaff.save().then(() =>
   res.status(201).send());
});
    // Delete Staff
router.delete('/:id', async (req,res) => {
   
    const allStaff = await loadCollection();
    await allStaff.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)}); // id must match the param fed in the delete function @ :id
    res.status(200).send();
  })
  

async function loadCollection() {
    const staff = await mongodb.MongoClient.connect(
      'mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
      }
    );
  
    return staff.db('vue_express').collection('staff');
  }
    

module.exports = router;