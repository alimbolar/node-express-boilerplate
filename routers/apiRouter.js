const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/message", messageController.saveMessage);

module.exports = router;
