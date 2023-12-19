const express = require("express");
const shopController = require("../controllers/fishWorld");

const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/FishLand',shopController.getProducts);

router.get('/FishBag',shopController.getCart);

router.post('/FishBag',shopController.postCart);

router.get('/FishLand/:productId',shopController.getProduct);

router.get('/orders',shopController.getOrders);

router.post('/cart-delete-item',shopController.postDeleteCartProduct);

router.post('/orders',shopController.postOrder);

module.exports = router;