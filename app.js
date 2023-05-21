const express = require("express");
const app = express();
const cors = require("cors");
const ProductRouter = require("./Routers/Product.Routers");


app.use(express.json());
app.use(cors());

// mongoose patten 
// 1.schema > 2.model > 3.query

// 3. query
app.use("/api/v1/product", ProductRouter);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
