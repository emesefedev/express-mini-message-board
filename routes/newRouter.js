const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("This is where you can send messages"));

module.exports = newRouter;