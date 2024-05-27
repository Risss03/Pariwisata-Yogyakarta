const express = require('express');
const router = express.Router();
const pool = require('../models/db');
const multer = require('multer');

// Konfigurasi Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Simpan gambar di folder uploads
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nama file unik dengan timestamp
    }
});
const upload = multer({ storage: storage });

// Admin login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Admin login process
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.admin = true;
        res.redirect('/admin/dashboard');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
});

// Admin dashboard
router.get('/dashboard', (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }
    res.send(`
        <h1>Admin Dashboard</h1>
        <a href="/admin/pariwisata/new">Add New Pariwisata</a>
        <form method="post" action="/admin/logout" style="margin-top: 20px;">
            <button type="submit">Logout</button>
        </form>
    `);
});


// Add new pariwisata form
router.get('/pariwisata/new', (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }
    res.render('new_pariwisata');
});

// Add new pariwisata process
router.post('/pariwisata', upload.single('gambar'), async (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }
    const { judul, deskripsi, deskripsiGambar } = req.body;
    const gambar = req.file.filename;
    try {
        await pool.query('INSERT INTO pariwisata (judul, deskripsi, deskripsi_gambar, gambar) VALUES (?, ?, ?, ?)', [judul, deskripsi, deskripsiGambar, gambar]);
        res.redirect('/admin/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Admin logout process
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/admin/dashboard');
        }
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
    });
});

module.exports = router;
