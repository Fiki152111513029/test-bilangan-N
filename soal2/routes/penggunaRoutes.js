const express = require('express');
const router = express.Router();
const { getPengguna, getPenggunaById, addPengguna, updatePengguna, deletePengguna } = require('../controllers/penggunaController');

router.get('/', getPengguna);
router.get('/:id', getPenggunaById);
router.post('/addpengguna', addPengguna);
router.put('/:id', updatePengguna);
router.delete('/:id', deletePengguna);

module.exports = router;