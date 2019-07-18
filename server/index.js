require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const ac = require('./controllers/authController');
const dc = require('./controllers/dashController');
const initSession = require('./middleware/initSession');
const authCheck = require('./middleware/authCheck');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

massive(CONNECTION_STRING).then(db => app.set('db', db));

app.use(initSession);

app.post('/api/login', ac.login);
app.post('/api/signup', ac.signup);
app.get('/api/dashboard', authCheck, dc.getDashboard);
app.delete('/api/logout', ac.logout);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
