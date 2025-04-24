require('dotenv').config();

const express = require("express")
const app = express()

const path = require("node:path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const newRouter = require("./routes/newRouter")
const indexRouter = require("./routes/indexRouter") 

app.use("/new", newRouter)
app.use("/", indexRouter)

// error middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`My first Express app - listening on port ${port}!`)
});