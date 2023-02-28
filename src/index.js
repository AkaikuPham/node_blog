const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios

// Http logger
app.use(morgan('combined'));

// template engine
app.engine(
    '.hbs',
    exphbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
