const express = require('express');
const router = express.Router();
const pool = require('../models/db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});
const upload = multer({ storage: storage });

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.admin = true;
        res.redirect('/admin/dashboard');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
});

router.get('/dashboard', async (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }
    
    try {
        const searchTerm = req.query.search;
        let query = 'SELECT * FROM pariwisata';
        let params = [];
        
        if (searchTerm) {
        query += ' WHERE judul LIKE ?';
        params = [`%${searchTerm}%`];
        }
        const [pariwisataRows] = await pool.query(query, params);

        res.render('dashboard', { pariwisata: pariwisataRows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
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
    const { judul, deskripsi, kabupaten, fasilitas, hargaTiket, lokasi, latitude, longitude } = req.body;
    const gambar = req.file ? req.file.filename : '';

    try {
        await pool.query('INSERT INTO pariwisata (judul, deskripsi, kabupaten, fasilitas, hargaTiket, lokasi, gambar, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [judul, deskripsi, kabupaten, fasilitas, hargaTiket, lokasi, gambar, latitude, longitude]);
        res.redirect('/admin/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Edit pariwisata form
router.get('/pariwisata/:id/edit', async (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }
    try {
        const [pariwisata] = await pool.query('SELECT * FROM pariwisata WHERE id = ?', [req.params.id]);
        if (pariwisata.length === 0) {
            return res.status(404).send('Pariwisata tidak ditemukan');
        }
        res.render('edit_pariwisata', { pariwisata: pariwisata[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Update pariwisata process
router.post('/pariwisata/:id/update', upload.single('gambar'), async (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }
    const { judul, deskripsi, kabupaten, fasilitas, hargaTiket, lokasi, latitude, longitude } = req.body;
    let gambar = req.body.existingGambar;
    if (req.file) {
        gambar = req.file.filename;
    }

    try {
        await pool.query('UPDATE pariwisata SET judul = ?, deskripsi = ?,kabupaten = ?, fasilitas = ?, hargaTiket = ?, lokasi = ?, gambar = ?, latitude = ?, longitude = ? WHERE id = ?', [judul, deskripsi, kabupaten, fasilitas, hargaTiket, lokasi, gambar, latitude, longitude, req.params.id]);
        res.redirect('/admin/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Delete pariwisata process
router.post('/pariwisata/:id/delete', async (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/admin/login');
    }

    try {
        const [pariwisata] = await pool.query('SELECT * FROM pariwisata WHERE id = ?', [req.params.id]);
        if (!pariwisata.length) {
            return res.status(404).send('Pariwisata tidak ditemukan');
        }
        // Hapus file gambar dari folder uploads
        const imagePath = path.join(__dirname, '../uploads/', pariwisata[0].gambar);
        if (fs.existsSync(imagePath)) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(`Error deleting image ${pariwisata[0].gambar}: ${err}`);
                } else {
                    console.log(`Deleted image ${pariwisata[0].gambar}`);
                }
            });
        } else {
            console.error(`Image not found: ${pariwisata[0].gambar}`);
        }
        // Hapus entri pariwisata dari database
        await pool.query('DELETE FROM pariwisata WHERE id = ?', [req.params.id]);
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error(error);
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
