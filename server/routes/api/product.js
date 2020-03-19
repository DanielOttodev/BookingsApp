const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const db = require('./../../../_helpers/db')
const Product = db.Product;


router.get('/', async (req, res) => {
    const allProducts = await loadCollection();
    res.send(await allProducts.find({}).toArray());// {}put options to query in here, no option is find all.
  });



router.post('/', async (req, res) => {

    const newProduct = new Product({
        productType: req.body.productType,
        productName: req.body.productName,
        price:req.body.price,
        description:req.body.description
    })
    newProduct.save().then(() =>
    res.status(201).send());
})
  

async function loadCollection() {
    const allProducts = await mongodb.MongoClient.connect(
      'mongodb+srv://admin0000:1Boost23@devadmin-sjh35.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
      }
    );
  
    return allProducts.db('vue_express').collection('products');
  }

  module.exports = router;