const { Router } = require("express")
const { getMessages } = require('../controllers/messagesController')

const newRouter = Router()

newRouter.get("/", (req, res) => res.send("This is where you can send messages"))
newRouter.get("/messages", getMessages)

module.exports = newRouter