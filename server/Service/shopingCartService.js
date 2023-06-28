import ShoppingCart from '../Models/shopinCartModel.js';
import { NotFoundError } from '../helpers/errorHandler.js';
import userService from '../Service/usersService.js';
const cartService = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
};

async function findCartById(id) {
  const cart = await ShoppingCart.findById(id);
  if (cart) {
    return cart;
  } else {
    return new NotFoundError(`Cart Not Found`);
  }
}

async function createCart(products, userId) {
  const newCart = new ShoppingCart({ products, userId });
  return await newCart.save();
}

async function getAll(page, size) {
  // Pagination for products
  const actualPage = parseInt(page) || 1;
  const pageSize = parseInt(size) || 8;
  const skipCount = (actualPage - 1) * pageSize;

  const totalCount = await ShoppingCart.countDocuments();
  const totalPages = Math.ceil(totalCount / pageSize);

  const carts = await ShoppingCart.aggregate([
    { $sample: { size: totalCount } },
    { $skip: skipCount },
    { $limit: pageSize },
  ]);

  return { carts, totalPages };
}

async function getUserCart(userId) {
  await userService.getUser(userId);
  return await ShoppingCart.findOne({ userId });
}

async function editCart(body, cartId) {
  await findCartById(cartId);
  return await ShoppingCart.findByIdAndUpdate(
    cartId,
    {
      $set: body,
    },
    { new: true },
  );
}

async function deleteCart(cartId) {
  await findCartById(cartId);
  return await ShoppingCart.findByIdAndDelete(cartId);
}

export default cartService;
