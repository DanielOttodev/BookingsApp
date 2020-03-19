const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const db = require('../../../_helpers/db')
const Client = db.Client // Gets the model from the config file
const mongoose = require('mongoose');
//const uri = "mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority";
//  Get Posts

router.get('/', async (req, res) => {
    const clients = await loadCollection();
    res.send(await clients.find({}).toArray());// {}put options to query in here, no option is find all.
  });

    
//  Add Posts
router.post('/', (req, res) => {

    
    const newClient = new Client({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contact:req.body.contact,
      createdAt: new Date()
  
    })
    newClient.save().then(() =>
    res.status(201).send() );
});

//  Delete Client by Id
router.delete('/:id', async (req,res) => {
   
  const clients = await loadCollection();
  await clients.deleteOne({
      _id: new mongodb.ObjectId(req.params.id)}); // id must match the param fed in the delete function @ :id
  res.status(200).send();
})


async function loadCollection() {
    const client = await mongodb.MongoClient.connect(
      'mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  
    return client.db('vue_express').collection('client');
  }
    


//Export the router function to use in other files
module.exports = router;