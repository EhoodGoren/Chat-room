const express = require('express');
const cors = require('cors');
const errorHandler = require('./backend/middlewares/errorHandler');
const chatRouter = require('./backend/routers/chatRouter');
const { router: loginRouter } = require('./backend/routers/loginRouter');

const app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})

app.use(cors());
app.use(express.json());

app.use('/chat', chatRouter);
app.use('/login', loginRouter);

app.use(errorHandler);
