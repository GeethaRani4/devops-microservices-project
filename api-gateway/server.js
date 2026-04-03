const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});