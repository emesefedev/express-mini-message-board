const { Router } = require("express");
const { getMessages } = require('../controllers/messagesController')
const { formatDate } = require("../utilities/dateFormatter")

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const messages = await getMessages()
  res.render("messages", { title: "Mini Message Board", messages: messages, formatDate: formatDate });
})

module.exports = indexRouter;