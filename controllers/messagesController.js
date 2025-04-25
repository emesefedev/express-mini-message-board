const db = require("../db")
const asyncHandler = require("express-async-handler")
const CustomNotFoundError = require("../errors/CustomNotFoundError")
const CustomNoContentError = require("../errors/CustomNoContentError")

const getMessages = asyncHandler(async() => {

  const messages = await db.getMessages()

  if (!messages) {
    throw new CustomNotFoundError("Messages not found")
  }

  return messages
})

const addMessage = ({author, message}) => {
  if (!author) {
    throw new CustomNoContentError("No author specified")
  }

  if (!message) {
    throw new CustomNoContentError("No message specified")
  }

  db.addMessage({author, message})
}

module.exports = { getMessages, addMessage }