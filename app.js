require('dotenv').config();

const express = require("express")
const app = express()

const newRouter = require("./routes/newRouter")
const indexRouter = require("./routes/indexRouter") 

app.use("/new", newRouter)
app.use("/", indexRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`My first Express app - listening on port ${port}!`)
});