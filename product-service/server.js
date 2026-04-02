const express = require("express");
const app = express();

app.get("/products", (req, res) => {
    res.json([
        { id: 1, product: "Laptop" },
        { id: 2, product: "Phone" }
    ]);
});

app.listen(4002, () => console.log("Product Service running on 4002"));