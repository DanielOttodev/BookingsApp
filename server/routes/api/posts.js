const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
//const uri = "mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority";
//  Get Posts

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());// {}put options to query in here, no option is find all.
  });

    
//  Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//  Delete Posts
router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
      'mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true
      }
    );
  
    return client.db('vue_express').collection('posts');
  }
    


//Export the router function to use in other files
module.exports = router;