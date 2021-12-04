const express = require('express');
const router = express.Router();

const messages = [];
router.get('/chat', (req, res) => {
    console.log('connection');
    res.writeHead(200, {
        'Content-Type': 'text/event-stream'
    });
    setInterval(()=>{
        const data = JSON.stringify(messages);
        res.write(`data: ${data}\n\n`);
    },3000)
})

router.post('/', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.send('Accepted');
})

module.exports = router;