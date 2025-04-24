const messages = [
  {
    text: "Hi there!!!",
    user: "Miquel",
    added: new Date()
  },
  {
    text: "Hello Miquel :)",
    user: "María",
    added: new Date()
  }
]

async function getMessages() {
    return messages
  }
  
module.exports = { getMessages }