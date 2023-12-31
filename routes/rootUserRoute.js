const express = require("express");
const rootController = require("../controllers/rootUser");
const apiController = require("../controllers/apiTest");
const router = express.Router();

router.get('/apiAllFish', apiController.apiAllFishes);

router.post('/apiAddFish', apiController.apiNewFish);

router.put('/apiUpdateFish/:fishId', apiController.apiUpdateFish);

router.delete('/apiDeleteFish/:fishId', apiController.apiDeleteFish);

router.get('/addFish',rootController.goToAddNewFishPage); 

router.post('/addFish',rootController.NewFish);

router.get('/Fish',rootController.AllFishes); 

router.get('/updateFish/:productId',rootController.goToUpdateFish)

router.post('/updateFish',rootController.updateFish);

router.post('/deleteFish',rootController.deleteFish);

module.exports = router;
