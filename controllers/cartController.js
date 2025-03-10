let cartItems = [];

const getCartByUserId = (req, res) => {
    const { userId } = req.param;
    res.send(`Fetching cart for user with ID: ${userId}`);
}

const addItemToCart = (req, res) => {
    const { userId } = req.param;
    res.send(`Adding product to cart for user with ID: ${userId}`)
};

module.exports={
    getCartByUserId,
    addItemToCart
};
