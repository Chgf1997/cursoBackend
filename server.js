const sqlite3 = require('sqlite3');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registrations_routes');
const sessionRoutes = require('./routes/sessions_routes');
const CategoriesRoutes = require('./routes/categories_routes');

const findUserMiddleware = require('./middleware/find_user');
const authUser = require('./middleware/auth_user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(session({
    secret:['dfdfd3f45ff4f54f53fd5fds3f5gj52', 'fgj4k5hl5j4f5gfdws3fdgt4ui5op454kgvnbn45nb45'],
    saveUninitialized: false,
    resave: false
}));

app.use(findUserMiddleware);
app.use(authUser);

app.use(tasksRoutes);
app.use(registrationRoutes);
app.use(sessionRoutes);
app.use(CategoriesRoutes);

app.get('/', function(req, res){
    res.render('home', {user: req.user});
});

app.listen(3000,()=>console.log('Running server port localhost:3000'));
