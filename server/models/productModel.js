//:server/models/productModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Define Schema
const productSchema = new Schema({
    productType: {type:String, required: true},
    productName: {type:String, required: true},
    price: {type: Number},
    description: String,




});
productSchema.set('toJSON', {virtuals: true});
// Export and compile the schema
module.exports = mongoose.model('Product', productSchema, 'products');

