const express = require('express');
const bodyParser = require('body-parser'); 
const passport = require('passport');
const cors = require('cors');
const  jwt = require('../_helpers/jwt');
const errorHandler = require('../_helpers/error-handler');
const app = express();   //Initialise the app


//Middle Ware
app.use(bodyParser.json());  // bodyParser for JSON -- 
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());             // cors to remove CORS networking issue.
//app.use(jwt);





const posts = require('./routes/api/posts'); // Setup the route for posts
const clients = require('./routes/api/client');
const staff = require('./routes/api/staff');
const products = require('./routes/api/product');
const events = require('./routes/api/events');
const login = require('./routes/api/login')
//const register = require('./routes/api/register');

app.use(passport.initialize());

app.use('/users',require('./routes/api/user.Controller'));
app.use('/api/staff',staff);
app.use('/api/client',clients);
app.use('/api/posts',posts); // For any calls to url:port/api/posts, use the posts variable
app.use('/api/product',products);
app.use('/api/events', events);
app.use('/api/login',login)

app.use(errorHandler);
//Port
const port = process.env.PORT || 5000;   // || means OR

app.listen(port, () => console.log(`Server started on port ${port}`));
 