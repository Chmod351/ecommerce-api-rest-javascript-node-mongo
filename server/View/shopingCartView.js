import ShoppingCart from '../Models/shopinCartModel.js';

const cartService = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
};

async function createCart(products, userId) {
  const newCart = new ShoppingCart({ products, userId });
  return await newCart.save();
}

async function getAll() {
  return await ShoppingCart.find();
}

async function getUserCart(userId) {
  return await ShoppingCart.findOne({ userId });
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

export default cartService;
