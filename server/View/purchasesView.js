import Purchase from '../Models/purchasesModel.js';
const purchaseActions = {
  createPurchase,
  getUserPurchases,
  getMonthly,
  cleanPurchase,
  updatePurchaseState,
  getAllPurchases,
};

async function createPurchase(
  userId,
  products,
  amount,
  paymentMethod,
  shippingAddress,
) {
  const purchase = new Purchase({
    userId,
    products,
    amount,
    paymentMethod,
    shippingAddress,
  });
  return await purchase.save();
}

async function getAllPurchases(limit, skip) {
  const purchase = await Purchase.find().skip(skip).limit(limit);
  return purchase;
}

async function getUserPurchases(id) {
  const userPurchases = await Purchase.find({ userId: id });
  return userPurchases;
}


async function getMonthly() {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  const income = await Purchase.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { $month: '$createdAt' },
        sales: '$amount',
      },
    },
    {
      $group: {
        _id: '$month',
        total: { $sum: '$sales' },
      },
    },
  ]);
  return income;
}

async function cleanPurchase(id) {
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
