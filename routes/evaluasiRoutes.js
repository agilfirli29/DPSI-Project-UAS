const express = require('express');
const router = express.Router();
const evaluasiController = require('../controllers/evaluasiController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, evaluasiController.getAllEvaluasi);

module.exports = router;
