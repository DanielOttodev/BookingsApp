const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const verify = require('./../../../_helpers/jwt')
//const uri = "mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority";
//  Get Posts

router.get('/', async (req, res) => {
    const events = await loadEventsCollection();
    res.send(await events.find({}).toArray());// {}put options to query in here, no option is find all.
  });

//  Add Posts
router.post('/', async (req, res) => {
    const events = await loadEventsCollection();
    req.body.createdAt = new Date()
    await events.insertOne(req.body);
    res.status(201).send();
});

//  Delete Posts
router.delete('/:id', async (req,res) => {
    const events = await loadEventsCollection();
    await events.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})


  async function loadEventsCollection() {
    const client = await mongodb.MongoClient.connect(
      'mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
      }
    );
  
    return client.db('vue_express').collection('events');
  }
    
  module.exports = router;