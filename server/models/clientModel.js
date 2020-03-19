//:server/models/clientModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Define Schema
const clientSchema = new Schema({
  //  _id:mongoose.Schema.Types.ObjectId,
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    contact:{type:String, required:true},
    startDate: {type: Date, default: Date.now}

});
clientSchema.set('toJSON', {virtuals: true});
// Export and compile the schema
module.exports = mongoose.model('Client', clientSchema,'client');

//Must tell mongoose which collection to use in the 3rd param of mongoose.model


