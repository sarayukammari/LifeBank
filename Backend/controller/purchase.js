const Purchase = require("../models/purchase");
const purchaseStock = require("./purchaseStock");


const addPurchase = (req, res) => {
  const addPurchaseDetails = new Purchase({
    userID: req.body.userID,
    ProductID: req.body.productID,
    QuantityPurchased: req.body.quantityPurchased,
    PurchaseDate: req.body.purchaseDate,
    TotalPurchaseAmount: req.body.totalPurchaseAmount,
  });

  addPurchaseDetails
    .save()
    .then((result) => {
      purchaseStock(req.body.productID, req.body.quantityPurchased);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};


const getPurchaseData = async (req, res) => {
  const findAllPurchaseData = await Purchase.find({"userID": req.params.userID})
    .sort({ _id: -1 })
    .populate("ProductID"); 
  res.json(findAllPurchaseData);
};

const getTotalPurchaseAmount = async (req, res) => {
  let totalPurchaseAmount = 0;
  const purchaseData = await Purchase.find({"userID": req.params.userID});
  purchaseData.forEach((purchase) => {
    totalPurchaseAmount += purchase.TotalPurchaseAmount;
  });
  res.json({ totalPurchaseAmount });
};

module.exports = { addPurchase, getPurchaseData, getTotalPurchaseAmount };
