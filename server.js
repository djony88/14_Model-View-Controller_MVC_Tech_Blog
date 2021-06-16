const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');

require('dotenv').config();

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({helpers});

// init session
const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: { maxAge: 6500000 },
    resave: false,
    saveUninit: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// initilize the server
const app = express();
// define port server
const PORT = process.env.PORT || 3001;

// path for server for static files to public directory
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));

// path to the routes
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
