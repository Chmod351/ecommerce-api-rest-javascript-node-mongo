import purchaseActions from '../View/purchasesView.js';

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
      req.body.paymentMethod,
      req.body.shippingAddress,
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
    .getMonthly(req.user.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function cleanPurchase(req, res, next) {
  purchaseActions
    .cleanPurchase(req.user.id)
    .then(() =>
      res.json({ message: `purchase with id ${req.params.id} was deleted` }),
    )
    .catch((error) => next(error));
}

function updatePurchaseState(req, res, next) {
  purchaseActions
    .updatePurchaseState(req.params.id, req.body.shippingStatus)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

export default purchaseController;
