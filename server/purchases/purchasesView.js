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

async function getUserPurchases(id) {
  const userPurchases = await Purchase.find({ userId: id });
  return userPurchases;
}

async function getPurchaseById(id) {
  const purchase = await Purchase.findById(id);
  return purchase;
}

async function cancelPurchase(id) {
  const purchase = await Purchase.findByIdAndDelete(id);
  return purchase;
}

async function updatePurchaseState(id, status) {
  const newStatus = await Purchase.findOneAndUpdate(
    {
      _id: id,
    },
    { shippingStatus: status },
    { new: true },
  );
  return newStatus;
}

export default purchaseActions;
