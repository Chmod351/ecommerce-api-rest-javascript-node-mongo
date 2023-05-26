import Purchase from './purchasesModel.js';
const purchaseActions = {
  createPurchase,
  getUserPurchases,
  getPurchaseById,
  cancelPurchase,
  updatePurchaseState,
  getAllPurchases,
};

async function createPurchase(
  userId,
  productsId,
  purchaseDate,
  paymentMethod,
  shippingAddress,
) {
  const purchase = new Purchase({
    userId,
    productsId,
    purchaseDate,
    paymentMethod,
    shippingAddress,
  });
  return await purchase.save();
}
async function getAllPurchases() {
  const purchase = await Purchase.find().limit(10);
  return purchase;
}

async function getUserPurchases(params) {}

async function getPurchaseById(params) {}

async function cancelPurchase(params) {}

async function updatePurchaseState(params) {}

export default purchaseActions;
