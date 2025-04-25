const { Router } = require("express");
const { getMessages, addMessage } = require('../controllers/messagesController')
const { formatDate } = require("../utilities/dateFormatter")

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const messages = await getMessages()
  res.render("messages", { title: "Mini Message Board", messages: messages, formatDate: formatDate });
})

indexRouter.post("/new", (req, res) => {
  const {author, message} = req.body
  addMessage({author, message})

  res.redirect("/")
})

module.exports = indexRouter;