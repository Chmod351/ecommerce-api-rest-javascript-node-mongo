import Product from './productModel.js';

const productActions = {
  getProducts,
  getProductById,
  getProductsByTag,
  createProduct,
  searchProduct,
  updateProduct,
  hideProduct,
};

const ObjectId = require('mongoose').Types.ObjectId;

function isValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
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

async function getProducts(params) {}

async function getProductsByTag(params) {}

async function createProduct(params) {}

async function searchProduct(params) {}

async function updateProduct(params) {}

async function hideProduct(params) {}

export default productActions;
