const Product = require("../models/product");

exports.apiNewFish = (req, res, next) => {
    const fishName = req.body.fishName;
    const fishType = req.body.fishType;
    const fishPrice = req.body.fishPrice;
    const fishBGImg = req.body.fishImage;
    const fishDetail = req.body.fishDetail;
    req.user
      .createProduct({
        fishName: fishName,
        fishType : fishType,
        fishPrice: fishPrice,
        fishImage: fishBGImg,
        fishDetail: fishDetail,
      })
      .then((result) => {
        try{
            res.status(201).json({
                message: "Your Fish Has Been Added to DB",
                result
            })
        }catch(err){
          console.log(err);
        }
      })
      .catch((err) => console.log(err));
  };

  exports.apiAllFishes = (req, res, next) => {
    req.user.getProducts()
      .then((products) => {
            try{
                res.status(200).json({
                    message: "Your Fishesh",
                    products
                })
            }catch(err){
            console.log(err);
            }
      })
      .catch((err) => console.log(err));
  };

  exports.apiUpdateFish = (req, res, next) => {
    const fishId = req.params.fishId;
    const fishName = req.body.fishName;
    const fishType = req.body.fishType;
    const fishPrice = req.body.fishPrice;
    const fishBGImg = req.body.fishImage;
    const fishDetail = req.body.fishDetail;
  
    Product.findByPk(fishId)
      .then((product) => {
        product.fishName = fishName;
        product.fishType = fishType;
        product.fishImage = fishBGImg;
        product.fishPrice = fishPrice;
        product.fishDetail = fishDetail;
        return product.save();
      })
      .then((result) =>
        {
            try{
                res.status(200).json({
                    message: "Your Fish Has Been Updated successfully",
                    result
                })
            }catch(err){
              console.log(err);
            }
        }
      )
      .catch((err) => console.log(err));
  };

  exports.apiDeleteFish = (req, res, next) => {
    const fishId = req.params.fishId;
    Product.findByPk(fishId)
      .then((product) => {
        return product.destroy();
      })
      .then((result) => {
        try{
            res.status(200).json({
                message: "Your Fish Has Been Deleted successfully",
                result
            })
        }catch(err){
          console.log(err);
        }
      })
      .catch((err) => console.log(err));
  };