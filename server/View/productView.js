import Product from '../Models/productModel.js';
import mongoose from 'mongoose';

const productService = {
  getProduct,
  getProductById,
  getProductByTag,
  createProduct,
  searchProduct,
  updateProduct,
  hideProduct,
};

function isValidObjectId(id) {
  // check if the id is in a valid format
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
    throw new Error('not found');
  }
}

async function getProduct(page, size) {
  // pagination for products
  const actualPage = parseInt(page) || 1;
  const pageSize = parseInt(size) || 8;
  const skipCount = (actualPage - 1) * pageSize;
  const products = await Product.find().skip(skipCount).limit(pageSize);

  const totalCount = await Product.countDocuments();
  const totalPages = Math.ceil(totalCount / pageSize);

  return { products, totalPages };
}

async function getProductByTag(category, page, size) {
  const actualPage = parseInt(page) || 1;
  const pageSize = parseInt(size) || 8;
  const skipCount = (actualPage - 1) * pageSize;
  const products = await Product.find({ tags: { $all: category } })
    .skip(skipCount)
    .limit(pageSize);

  const totalCount = await Product.countDocuments();
  const totalPages = Math.ceil(totalCount / pageSize);

  return { products, totalPages };
}

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

async function searchProduct(query) {
  const product = await Product.find({
    name: { $regex: query, $options: 'i' },
  }).limit(40);
  return product;
}

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

async function hideProduct(productId) {
  await getProductById(productId);
  return await Product.findOneAndUpdate(
    { _id: productId },
    { $set: { hide: true } },
    { new: true },
  );
}

export default productService;
