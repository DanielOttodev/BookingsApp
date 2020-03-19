const expressJwt = require('jsonwebtoken');
const config = require('../server/config');
const userService = require('../server/users/userService');

module.exports = jwt;

function jwt(req, res, next){

    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, config.secret);
        req.username = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
    /*const secret = config.secret;
    return expressJwt({secret, isRevoked}).unless({
        path: [
            'users/authenticate',
            'users/register'
         
        ]
    });*/
}

async function isRevoked(req, payload, done){
    const user = await userService.getById(payload.sub);

    //  revoke token if user no longer exists
    if (!user){
        return done(null, true);
    }
    done();
};

