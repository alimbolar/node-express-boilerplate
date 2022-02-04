const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewControllers");

router.get("/", viewController.showHome);
router.get("/:path", viewController.showPage);

module.exports = router;
