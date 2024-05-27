const express = require('express');
const session = require('express-session');
const app = express();
const pariwisataRoutes = require('./routes/pariwisata');
const adminRoutes = require('./routes/admin');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.use('/api/pariwisata', pariwisataRoutes);
app.use('/pariwisata', pariwisataRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.redirect('/admin/login');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
