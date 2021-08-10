const express = require('express')
const bp = require('body-parser');
const { json } = require('body-parser');
const morgan = require('morgan');
const path = require('path')

const lionsRouter = require('./lions');
const tigersRouter = require('./tigers');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

app.use('/lions', lionsRouter);
app.use('/tigers', tigersRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
})


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})