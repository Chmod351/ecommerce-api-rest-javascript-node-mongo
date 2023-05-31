export default class IPaymentProvider {
  async createPayment(tokenId, amount) {
    throw new Error('Not implemented');
  }
}

