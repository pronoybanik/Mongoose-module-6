const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log('database connection is successful'.red.bold);
})

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});


