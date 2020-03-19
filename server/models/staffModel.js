//:server/models/staffModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Define Schema
const staffSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    startDate: {type: Date, default: Date.now}

});
staffSchema.set('toJSON', {virtuals: true});
// Export and compile the schema
module.exports = mongoose.model('Staff', staffSchema, 'staff');

