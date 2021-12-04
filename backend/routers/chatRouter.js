const express = require('express');
const router = express.Router();

const messages = [];
router.get('/', (req, res) => {
    console.log('connection');
    res.writeHead(200, {
        'Content-Type': 'text/event-stream'
    });
    setInterval(()=>{
        const data = JSON.stringify(messages);
        res.write(`data: ${data}\n\n`);
    },3000)
})

router.post('/message', (req, res, next) => {
    const { user, message } = req.body;
    if(!user || !message) next({status: 400, message: 'Bad Request'});
    messages.push({user, message});
    res.send('Accepted');
})

module.exports = router;