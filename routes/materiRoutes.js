const express = require('express');
const router = express.Router();
const materiController = require('../controllers/materiController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, materiController.getAllMateri);

module.exports = router;
