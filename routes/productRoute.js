const express = require('express');
const router = express.Router();

let products = [];

router.get('/', (req, res) => {
  res.send('Fetching all products');
});

router.post('/', (req, res) => {
  res.send('Adding a new product');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
});

module.exports = router;
