// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db'); // Import the database connection
// const checkJwt = require('./middleware');
const bodyParser = require('body-parser');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');


// JWT Middleware
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: `https://dev-0qczjx0k.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: 'https://holly.com',
  issuer: `https://dev-0qczjx0k.us.auth0.com/`,
  algorithms: ['RS256'],
});

const app = express();
const port = process.env.PORT || 3000;


// Enable CORS
app.use(cors());

// // Enable the use of request body parsing middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// Database connection
connectDB().then(() => {
  console.log("Database connection established");

  // Use JSON middleware to parse request bodies
  app.use(express.json());

// Apply the authentication middleware to the routes that need protection
  app.use('/api', checkJwt);

  // Routes prefix
  console.log("before use method");
  app.use('/api/post', require("./routes/routes"));
  console.log("after use method");

  // Example route
app.get('/api', (req, res) => {
  // req.user will contain the decoded JWT
  const userId = req.auth.sub;
  
  console.log(res.json({ message: 'Protected route', userId }))
});

  // Start server
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}).catch(err => {
  console.error("Failed to connect to the database. Server not started.", err.message);
});
