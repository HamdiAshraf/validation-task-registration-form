const express = require('express');
const path = require('path');
const logger = require('morgan');

const registerRouter = require('./routes/registerRoute')

const app = express();
const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));






app.use('/', registerRouter);





app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

