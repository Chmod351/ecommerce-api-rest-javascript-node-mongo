import Purchase from './purchasesModel.js';
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

// find purchase by id
async function findPurchaseById(id) {
  const purchase = await Purchase.findById(id);
    return purchase;

}
// create purchases
async function createPurchase(userId, cartId, amount, shippingAddress) {
  const purchase = new Purchase({
    userId,
    cartId,
    amount,
    shippingAddress,
  });

  return await purchase.save();
}
// get all purchases
async function getAllPurchase(page, size) {
  // get a pagination with purchases instead all purchases
  const actualPage = parseInt(page) || 1;
  const pageSize = parseInt(size) || 8;
  const skipCount = (actualPage - 1) * pageSize;

  const totalCount = await Purchase.countDocuments();
  const totalPages = Math.ceil(totalCount / pageSize);

  const products = await Purchase.aggregate([
    { $sample: { size: totalCount } },
    { $skip: skipCount },
    { $limit: pageSize },
  ]);

  return { products, totalPages };
}
// get user purchases
async function getUserPurchase(id) {
  return await Purchase.find({ userId: id });
}

// get monthly purchases
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
// delete purchases
async function cleanPurchase(id) {
  return await Purchase.findByIdAndDelete(id);
}
// change status purchases
async function updatePurchaseState(id, status) {
  await findPurchaseById(id);
  const newStatus = await Purchase.findOneAndUpdate(
    {
      _id: id,
    },
    { shippingStatus: status },
    { new: true },
  );
  console.log(newStatus);
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
