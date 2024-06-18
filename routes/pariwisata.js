const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// Get all pariwisata
router.get('/', async (req, res) => {
  const searchTerm = req.query.search;
  let query = 'SELECT * FROM pariwisata';
  let params = [];
    
  if (searchTerm) {
    query += ' WHERE judul LIKE ?';
    params = [`%${searchTerm}%`];
  }

  const [rows] = await pool.query(query, params);
  
  res.json(rows);
});

// Get detail pariwisata
router.get('/:id', async (req, res) => {
    try {
        const [pariwisata] = await pool.query('SELECT * FROM pariwisata WHERE id = ?', [req.params.id]);
        if (!pariwisata.length) {
            return res.status(404).send('Pariwisata tidak ditemukan');
        }
        const [reviews] = await pool.query('SELECT * FROM reviews WHERE pariwisata_id = ?', [req.params.id]);
        res.render('pariwisata_detail', { pariwisata: pariwisata[0], reviews });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat memuat detail pariwisata');
    }
});

// Post review
router.post('/:id/review', async (req, res) => {
    const { user, komentar, rating } = req.body;
    await pool.query('INSERT INTO reviews (pariwisata_id, user, komentar, rating) VALUES (?, ?, ?, ?)', [req.params.id, user, komentar, rating]);
    res.redirect(`/api/pariwisata/${req.params.id}`);
});

module.exports = router;
