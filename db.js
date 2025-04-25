const messages = [
  {
    text: "Hi there!!!",
    user: "Miquel",
    added: new Date("2025-04-24T12:36") 
  },
  {
    text: "Hello Miquel :)",
    user: "María",
    added: new Date("2025-04-24T12:38") 
  }
]

async function getMessages() {
  return messages
}

function addMessage({author, message}) {
  messages.push({text: message, user: author, added: new Date()})
}
  
module.exports = { getMessages,addMessage }