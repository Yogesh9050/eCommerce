const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:userId', cartController.getCartByUserId);
router.post('/:userId', cartController.addItemToCart);

module.exports = router;