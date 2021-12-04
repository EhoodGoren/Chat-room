const express = require('express');
const router = express.Router();

const users = [];

router.post('/', (req, res, next) => {
    const user = req.body.user;
    if(!user) next({status: 400, message: 'Please provide a username'});
    users.push(user);
    res.send('Login Successful');
})

module.exports = {
    router,
    users
}
