const express = require('express');
const router = express.Router();
const pool = require('../models/db');

router.get('/', async (req, res) => {
    try {
        const [pariwisataRows] = await pool.query('SELECT * FROM pariwisata');
        res.render('index', { pariwisata: pariwisataRows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
