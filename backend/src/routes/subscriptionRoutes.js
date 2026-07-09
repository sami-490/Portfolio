const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// POST /api/subscribe
router.post('/', subscriptionController.subscribe);

module.exports = router;
