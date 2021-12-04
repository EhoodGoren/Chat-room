const express = require('express');
const cors = require('cors');
const errorHandler = require('./backend/middlewares/errorHandler');
const router = require('./backend/routers/router');


const app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})

app.use(cors());
app.use(express.json());

app.use('/', router);

app.use(errorHandler);
