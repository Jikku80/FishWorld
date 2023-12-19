const Product = require("../models/product");

//takes to the add new fish page
exports.goToAddNewFishPage = (req, res, next) => {
  res.render("rootUser/edit-product", {
    pageTitle: "New Fish",
    path: "/root/addFish",
  });
};

//creates a new fish
exports.NewFish = (req, res, next) => {
  const fishName = req.body.fishName;
  const fishType = req.body.fishType;
  const fishPrice = req.body.fishPrice;
  const fishBGImg = req.body.fishBGImg;
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
      res.redirect("/FishLand");
    })
    .catch((err) => console.log(err));
};

//gets all the fishes from the db
exports.AllFishes = (req, res, next) => {
  req.user.getProducts()
    .then((products) => {
      res.render("rootUser/product-list", {
        prods: products,
        pageTitle: "Tweak Fish Section",
        path: "/root/Fish",
      });
    })
    .catch((err) => console.log(err));
};

//goes to the updatefish sec
exports.goToUpdateFish = (req, res, next) => {
  const updateDet = req.query.edit;
  if (!updateDet) {
    return res.redirect("/");
  }
  const fishId = req.params.productId;
  req.user.getProducts({where:{id: fishId}})

    .then((product) => {
      res.render("rootUser/edit-product", {
        product: product[0],
        pageTitle: "Tweak Fish",
        path: "/root/updateFish",
        editing: true,
      });
    })
    .catch((err) => console.log(err));
};

//updates the fish details
exports.updateFish = (req, res, next) => {
  const fishId = req.body.fishId;
  const fishName = req.body.fishName;
  const fishType = req.body.fishType;
  const fishPrice = req.body.fishPrice;
  const fishBGImg = req.body.fishBGImg;
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
      res.render("rootUser/edit-product", {
        product: result.dataValues,
        pageTitle: "Tweak Fish",
        path: "/root/updateFish",
        editing: true,
      })
    )
    .catch((err) => console.log(err));
  res.redirect("/root/Fish");
};

//removes the selected fish
exports.deleteFish = (req, res, next) => {
  const fishId = req.body.fishId;
  Product.findByPk(fishId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.redirect("/root/Fish");
    })
    .catch((err) => console.log(err));
};
