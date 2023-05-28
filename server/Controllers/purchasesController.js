import purchaseActions from "../View/purchasesView.js";

const purchaseController = {
  createPurchase,
  getUserPurchases,
  getAllPurchases,
  cleanPurchase,
  getMonthly,
  updatePurchaseState,
};

function createPurchase(req, res, next) {
  purchaseActions
    .createPurchase(
      req.user.id,
      req.body.products,
      req.body.amount,
      req.body.paymentMethod,
      req.body.shippingAddress
    )
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getAllPurchases(req, res, next) {
  purchaseActions
    .getAllPurchases()
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getUserPurchases(req, res, next) {
  purchaseActions
    .getUserPurchases(req.user.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getMonthly(req, res, next) {
  purchaseActions
    .getMonthly()
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function cleanPurchase(req, res, next) {
  purchaseActions
    .cleanPurchase(req.body.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function updatePurchaseState(req, res, next) {
  purchaseActions
    .updatePurchaseState(req.params.id, req.body.shippingStatus)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

export default purchaseController;
