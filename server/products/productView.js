import Product from './productModel.js';
import mongoose from 'mongoose';

const productActions = {
  getProducts,
  getProductById,
  getProductsByTag,
  createProduct,
  searchProduct,
  updateProduct,
  hideProduct,
};

function isValidObjectId(id) {
  if (mongoose.Types.ObjectId.isValid(id)) {
    if (String(new mongoose.Types.ObjectId(id)) === id) return true;
    return false;
  }
  return false;
}

async function getProductById(productId) {
  if (productId && isValidObjectId(productId)) {
    const product = await Product.findById(productId);
    return product;
  } else {
    throw new Error('bad request');
  }
}

async function getProducts() {
  const product = await Product.find().sort({ views: -1 }).limit(20);
  return product;
}

async function getProductsByTag(tags) {
  const product = await Product.find({ tags: { $in: tags } }).limit(20);
  return product;
}

async function createProduct(name, img, price, description, tags, hot) {
  const newProduct = new Product({
    userId: isAdmin,
    name,
    img,
    price,
    description,
    tags,
    hot,
  });
  return newProduct;
}

async function searchProduct(query) {
  const product = await Product.find({
    name: { $regex: query, $options: 'i' },
    tags: { $regex: query, $options: 'i' },
  }).limit(40);
  return product;
}

async function updateProduct(
  productId,
  newImg,
  newPrice,
  hot,
  newDescription,
) {
  const product = await getProductById(productId);

  if (newImg) {
    product.img = newImg;
  }
  if (newPrice) {
    product.price = newPrice;
  }
  if (hot !== undefined) {
    product.hot = hot;
  }
  if (newDescription) {
    product.description = newDescription;
  }

  const updatedProduct = await product.save();
  return updatedProduct;
}

async function hideProduct(params) {}

export default productActions;
