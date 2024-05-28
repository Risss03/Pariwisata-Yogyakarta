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
        <div class="dashboard">
            <h1>Admin Dashboard</h1>
            <a href="/admin/pariwisata/new">Add New Pariwisata</a>
            <form method="post" action="/admin/logout" style="margin-top: 20px;">
                <button type="submit">Logout</button>
            </form>
        </div>

        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }
        .dashboard {
            margin: 20px auto;
            padding: 20px;
            max-width: 600px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        .dashboard h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #007bff;
        }

        .dashboard a {
            text-decoration: none;
            border: 1px solid black;
            margin: 5px;
            padding: 5px;
            border-radius: 2px;
        }
        .dashboard a.btn, .dashboard .btn-logout {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            color: white;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
        }
        .dashboard .btn-logout {
            background-color: #dc3545;
        }
        .dashboard a.btn:hover, .dashboard .btn-logout:hover {
            background-color: #0056b3;
        }
        .dashboard .btn-logout:hover {
            background-color: #c82333;
        }
        </style>
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
