const db = require("../db")
const asyncHandler = require("express-async-handler")
const CustomNotFoundError = require("../errors/CustomNotFoundError")

const getMessages = (async(req, res) => {

  const messages = await db.getMessages()

  if (!messages) {
    throw new CustomNotFoundError("Messages not found")
  }

  res.send(`Messages: ${messages}`)
})

module.exports = { getMessages }