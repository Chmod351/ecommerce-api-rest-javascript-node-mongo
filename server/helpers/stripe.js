import IPaymentProvider from './paymentProcess.js';
import envConfig from '../config/envConfig.js';
import stripe from 'stripe';
const stripeInstance = stripe(envConfig.STRIPE);

export default class StripePaymentProvider extends IPaymentProvider {
  async createPayment(tokenId, amount) {
    return new Promise((resolve, reject) => {
      stripeInstance.charges.create(
        {
          source: tokenId,
          amount: amount,
          currency: 'usd',
        },
        (stripeErr, stripeRes) => {
          if (stripeErr) {
            reject(new Error('Stripe went wrong'));
          } else {
            resolve(stripeRes);
          }
        },
      );
    });
  }
}
