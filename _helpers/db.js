const config = require('../server/config');
const mongoose = require('mongoose');
try {
    mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology:true });
    mongoose.Promise = global.Promise;
    console.log('Connected successfully!') 
} catch (err) {
    console.log(err.message)
}


module.exports = {
    User: require('../server/users/user.model'),
    posts: require('./../server/routes/api/posts'),
    Staff: require('../server/models/staffModel'),
    Client:require('../server/models/clientModel'),
    Product:require('../server/models/productModel')
};

//Connection string in config file must point to the write database. Replace vue_express with your db name