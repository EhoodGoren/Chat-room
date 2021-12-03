const express = require('express');
const errorHandler = require('./backend/middlewares/errorHandler');

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})

app.use(express.json());

app.use(errorHandler);
