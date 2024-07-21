const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    { _id: '1', name: 'Product 1', description: 'Description 1', price: 10 },
    { _id: '2', name: 'Product 2', description: 'Description 2', price: 20 },
    { _id: '3', name: 'Product 3', description: 'Description 3', price: 30 },
];

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
