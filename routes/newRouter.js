const { Router } = require("express")
const { getMessages } = require('../controllers/messagesController')
const { formatDate } = require("../utilities/dateFormatter")

const newRouter = Router()

newRouter.get("/", (req, res) => res.send("This is where you can send messages"))
newRouter.get("/messages", async (req, res) => {
    const messages = await getMessages()
    res.render("messages", { messages: messages, formatDate: formatDate });
})

module.exports = newRouter