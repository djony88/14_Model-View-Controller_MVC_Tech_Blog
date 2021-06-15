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

const sess = {
    
}