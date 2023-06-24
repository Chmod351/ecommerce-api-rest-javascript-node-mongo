import Purchase from '../Models/purchasesModel.js';
import StripePaymentProvider from '../helpers/stripe.js';
const paymentProvider = new StripePaymentProvider();

const purchaseService = {
  createPurchase,
  getUserPurchase,
  getMonthly,
  cleanPurchase,
  updatePurchaseState,
  getAllPurchase,
  processPayment,
};

async function createPurchase(userId, cartId, amount, shippingAddress) {
  const purchase = new Purchase({
    userId,
    cartId,
    amount,
    shippingAddress,
  });
  
  return await purchase.save();
}

async function getAllPurchase(page, size) {
  // get a pagination with purchases instead all purchases
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Purchase.find().skip(skipCount).limit(pageSize);
}

async function getUserPurchase(id) {
  return await Purchase.find({ userId: id });
}

async function getMonthly() {
  //show the last 2 months sales
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
  return await Purchase.findByIdAndDelete(id);
}

async function updatePurchaseState(id, status) {
  const newStatus = await Purchase.findOneAndUpdate(
    {
      purchaseId: id,
    },
    { shippingStatus: status },
    { new: true },
  );
  return newStatus;
}

//stripe integration
async function processPayment(tokenId, amount) {
  try {
    const paymentResult = await paymentProvider.createPayment(tokenId, amount);
    return paymentResult;
  } catch (error) {
    return error.message;
  }
}

export default purchaseService;
