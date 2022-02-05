const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");

router.get("/", viewController.showHome);
router.get("/shop", viewController.showShop);
router.get("/:path", viewController.showPage);

module.exports = router;
