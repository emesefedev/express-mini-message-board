const db = require("../db");

async function getMessages(req, res) {

  const messages = await db.getMessages()

  if (!messages) {
    res.status(404).send("Messages not found")
    return
  }

  res.send(`Messages: ${messages}`);
};

module.exports = { getMessages };