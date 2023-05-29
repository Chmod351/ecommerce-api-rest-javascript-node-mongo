import ShoppingCart from '../Models/shopinCartModel.js';

const cartActions = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
};

async function createCart(body) {
  const newCart = new ShoppingCart(body);
  return await newCart.save();
}

async function editCart(body, cartId) {
  return await ShoppingCart.findByIdAndUpdate(
    cartId,
    {
      $set: body,
    },
    { new: true },
  );
}

async function deleteCart(cartId) {
  return await ShoppingCart.findByIdAndDelete(cartId);
}

async function getUserCart(userId) {
  return await ShoppingCart.findOne({ userId });
}

async function getAll() {
  return await ShoppingCart.find();
}

export default cartActions;
