const Store = require("../models/store");

const addStore = async (req, res) => {
    console.log(req.body)
  const addStore = await new Store({
    userID : req.body.userId,
    name: req.body.name,
    category: req.body.category,
    address: req.body.address,
    city: req.body.city,
  });

  addStore.save().then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

const getAllStores = async (req, res) => {
  const findAllStores = await Store.find({"userID": req.params.userID}).sort({ _id: -1 }); // -1 for descending;
  res.json(findAllStores);
};

module.exports = { addStore, getAllStores };
