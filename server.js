const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.static('public'));

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');

app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
