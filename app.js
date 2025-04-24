require('dotenv').config();

const express = require("express")
const app = express()

app.get("/", (req, res) => res.send("Hello, Emesefe!"))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`My first Express app - listening on port ${port}!`);
});