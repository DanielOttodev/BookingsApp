const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, unique: true, required: true}, // String, Must be unique and is mandatory.
    hash: {type: String, required: true},
    firstName: String,
    lastName: String,
    createdDate: {type: Date, default: Date.now}

});
userSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', userSchema,'users');