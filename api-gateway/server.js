const express = require('express');
const cors = require('cors');

const app = express();

// VERY IMPORTANT
app.use(cors());

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});