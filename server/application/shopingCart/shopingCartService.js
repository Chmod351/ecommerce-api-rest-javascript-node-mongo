import ShoppingCart from './shopinCartModel.js';
import userService from '../users/usersService.js';

const cartService = {
  createCart,
  editCart,
  deleteCart,
  getUserCart,
  getAll,
};

// get cart by id
async function findCartById(id) {
  const cart = await ShoppingCart.findById(id);
  return cart;
}

// create cart
async function createCart(products, userId) {
  const newCart = new ShoppingCart({ products, userId });
  return await newCart.save();
}

// get all carts paginated
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

// get user carts by user id
async function getUserCart(userId) {
  await userService.getUser(userId);
  return await ShoppingCart.findOne({ userId });
}

// edit user cart by id
async function editCart(body, cartId) {
  return await ShoppingCart.findByIdAndUpdate(
    cartId,
    {
      $set: body,
    },
    { new: true },
  );
}

//delete user cart by cart id
async function deleteCart(cartId) {
  return await ShoppingCart.findByIdAndDelete(cartId);
}

export default cartService;
