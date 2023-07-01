import purchaseService from './purchasesService.js';

const purchaseController = {
  createPurchase,
  getUserPurchase,
  getAllPurchase,
  cleanPurchase,
  getMonthly,
  updatePurchaseState,
  payment,
};

function createPurchase(req, res, next) {
  purchaseService
    .createPurchase(
      req.user.id,
      req.body.cartId,
      req.body.amount,
      req.body.shippingAddress,
    )
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getAllPurchase(req, res, next) {
  purchaseService
    .getAllPurchase(req.query.page, req.query.size)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getUserPurchase(req, res, next) {
  purchaseService
    .getUserPurchase(req.params.userId)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function getMonthly(req, res, next) {
  console.log("aadas")
  purchaseService
    .getMonthly(req.user.id)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function cleanPurchase(req, res, next) {
  purchaseService
    .cleanPurchase(req.params.id)
    .then(() =>
      res.json({ message: `purchase with id ${req.params.id} was deleted` }),
    )
    .catch((error) => next(error));
}

function updatePurchaseState(req, res, next) {
  purchaseService
    .updatePurchaseState(req.params.id, req.body.shippingStatus)
    .then((purchase) => res.json(purchase))
    .catch((error) => next(error));
}

function payment(req, res, next) {
  purchaseService
    .processPayment(req.body.tokenId, req.body.amount)
    .then((payment) => res.json(payment))
    .catch((error) => next(error));
}

export default purchaseController;
