import Product from './productController.js';
import mongoose from 'mongoose';
import { NotFoundError } from '../helpers/errorHandler.js';

const productService = {
  getProduct,
  getProductById,
  getProductByTag,
  createProduct,
  searchProduct,
  updateProduct,
  deleteProduct,
};

function isValidObjectId(id) {
  // check if the id is in a valid format
  if (mongoose.Types.ObjectId.isValid(id)) {
    if (String(new mongoose.Types.ObjectId(id)) === id) return true;
    else {
      return false;
    }
  } else {
    return false;
  }
}
// get product by id
async function getProductById(productId) {
  if (productId && isValidObjectId(productId)) {
    const product = await Product.findById(productId);
    return product;
  } else {
    throw new NotFoundError(`Product with id ${productId} Not found`);
  }
}
// pagination products

async function getProduct(page, size) {
  // Pagination for products
  const actualPage = parseInt(page) || 1;
  const pageSize = parseInt(size) || 8;
  const skipCount = (actualPage - 1) * pageSize;

  const totalCount = await Product.countDocuments();
  const totalPages = Math.ceil(totalCount / pageSize);

  const products = await Product.aggregate([
    { $sample: { size: totalCount } },
    { $skip: skipCount },
    { $limit: pageSize },
  ]);

  return { products, totalPages };
}

// recomendations && categories
async function getProductByTag(category, page, size) {
  const actualPage = parseInt(page) || 1;
  const pageSize = parseInt(size) || 8;
  const skipCount = (actualPage - 1) * pageSize;

  const query = { tags: { $all: category } };
  const countQuery = Product.find(query).countDocuments();
  const productsQuery = Product.find(query).skip(skipCount).limit(pageSize);

  const [totalCount, products] = await Promise.all([countQuery, productsQuery]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return { products, totalPages };
}

// create products
async function createProduct(
  name,
  img,
  price,
  description,
  tags,
  color,
  size,
  hot,
) {
  const newProduct = new Product({
    name,
    imgUrl: img,
    price,
    description,
    tags,
    color,
    size,
    hot,
  });
  return await newProduct.save();
}
// products by query
async function searchProduct(query) {
  const product = await Product.find({
    name: { $regex: query, $options: 'i' },
  }).limit(40);
  return product;
}
// change products properties

async function updateProduct(productId, newPrice, hot, newDescription) {
  const updatedProperties = {};

  if (newPrice) {
    updatedProperties.price = newPrice;
  }
  if (hot !== undefined) {
    updatedProperties.hot = hot;
  }
  if (newDescription) {
    updatedProperties.description = newDescription;
  }

  const result = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: updatedProperties },
    { new: true },
  );
  return result;
}
// delete products
async function deleteProduct(productId) {
  return await Product.findOneAndDelete(productId);
}

export default productService;
