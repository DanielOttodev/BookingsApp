const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');

const app = express();   //Initialise the app

//Middle Ware
app.use(bodyParser.json());  // bodyParser for JSON -- 
app.use(cors());             // cors to remove CORS networking issue.

const posts = require('./routes/api/posts'); // Setup the route for posts

app.use('/api/posts',posts); // For any calls to url:port/api/posts, use the posts variable

//Port
const port = process.env.PORT || 5000;   // || means OR

app.listen(port, () => console.log(`Server started on port ${port}`));
 