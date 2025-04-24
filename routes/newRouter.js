const { Router } = require("express")
const { getMessages } = require('../controllers/messagesController')

const newRouter = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Miquel",
    added: new Date()
  },
  {
    text: "Hello Miquel!",
    user: "María",
    added: new Date()
  }
]

newRouter.get("/", (req, res) => res.send("This is where you can send messages"))
newRouter.get("/messages", async (req, res) => {
    const messages = await getMessages()
    res.render("messages", { messages: messages });
})

module.exports = newRouter