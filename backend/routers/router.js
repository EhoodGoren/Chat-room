const express = require('express');
const router = express.Router();

const messages = [];
router.get('/', (req, res) => {
    console.log('connection');
    res.writeHead(200, {
        'Content-Type': 'text/event-stream'
    });
    setInterval(()=>{
        // messages.map((message, index) => {
        //     index === messages.length - 1 ?
        //     res.write(`data: ${message} \n\n`) :
        //     res.write(`data: ${message} \n`);
        // })
        res.write(`data: ${messages} \n\n`)
    },3000)
})

router.post('/', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.send('Accepted');
})

module.exports = router;