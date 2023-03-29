const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/products', (req, res) => {
  res.json([
    {"id": 1, "product": "Laptop", "price": 1850.00},
    {"id": 2, "product": "Tablet", "price": 980.00},
    {"id": 3, "product": "Cellphone", "price": 1180.00}
  ]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
