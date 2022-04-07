// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const hbs = exphbs.create({});
const session = require('express-session');
const routes = require('./controllers/user-routes');
// Sets up the Express App
const app = express();
// const routes = require(path.join(__dirname, 'controllers'));
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: 'bigbluedog',
  cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};


app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/patient-routes.js'));
app.use(require('./controllers/doctor-routes.js'));
app.use(require('./controllers/login-routes.js'));
app.use(require('./controllers/home-routes.js'));
app.use(require('./controllers/book-appointment.js'));
app.use(express.static('views/assets/img'));

app.use(routes);
// Starts the server to begin listening
// const server = require("http").Server(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

