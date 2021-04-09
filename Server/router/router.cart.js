const express = require("express");
const cartController = require("../controller/cartController");
const router = express.Router();

router.get("/cart", cartController.getCart);
router.post("/add-to-cart", cartController.addToCart);

module.exports = router;