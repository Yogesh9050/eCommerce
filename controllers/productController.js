let products = [];
const path = require('path');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'product.html'));
  };

  const addProduct = (req, res) => {
    const data = req.body
    res.json({value:data.productName});
  };

  const getProductById = (req, res) => {
    const { id } = req.params;
    res.send(`Fetching product with ID: ${id}`);
  };

  module.exports = {
    getAllProducts,
    addProduct,
    getProductById,
  };
  