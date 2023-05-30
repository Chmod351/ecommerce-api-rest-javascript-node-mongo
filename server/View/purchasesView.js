import Purchase from '../Models/purchasesModel.js';
import dotenv from 'dotenv';
dotenv.config();
import stripe from 'stripe';
process.env.STRIPE_TOKEN;

const purchaseService = {
  createPurchase,
  getUserPurchase,
  getMonthly,
  cleanPurchase,
  updatePurchaseState,
  getAllPurchase,
  createPayment,
};

async function createPurchase(userId, product, paymentMethod, shippingAddress) {
  const purchase = new Purchase({
    userId,
    product,
    paymentMethod,
    shippingAddress,
  });
  return await purchase.save();
}

async function getAllPurchase(page, size) {
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Purchase.find().skip(skipCount).limit(pageSize);
}

async function getUserPurchase(id) {
  return await Purchase.find({ userId: id });
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

async function createPayment(tokenId, amount) {
  stripe.charges.create(
    {
      source: tokenId,
      amount: amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        new Error('500');
      } else {
        return stripeRes;
      }
    },
  );
}

export default purchaseService;
