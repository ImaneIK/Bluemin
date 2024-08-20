const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');


// Middleware to check JWT
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: `dev-0qczjx0k.us.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://holly.com',
  issuer: `dev-0qczjx0k.us.auth0.com`,
  algorithms: ['RS256']
});

module.exports = checkJwt;
