const { Router } = require("express")

const newRouter = Router()

newRouter.get("/", async (req, res) => {
  res.render("form", { title: "New Message"});
})

module.exports = newRouter