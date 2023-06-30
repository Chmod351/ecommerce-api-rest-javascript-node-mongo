const request = require('supertest');
const { expect } = require('chai');
const config = require('dotenv');
config.dotenv();
const PORT = process.env.PORT;

const myRequest = request(`http://localhost:${PORT}/api/products`);

describe('product endpoint', () => {
  it('should return a list of products', async () => {
    const res = await myRequest.get('/products');
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.at.least(1);
  });
  it('should return a product by ID', async () => {
    const productId = '6470ec095e0b0295a98cb0db';
    const res = await myRequest.get(`/products/${productId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.all.keys(
      '__v',
      '_id',
      'createdAt',
      'description',
      'hide',
      'hot',
      'name',
      'price',
      'tags',
      'updatedAt',
    );
  });
  it('should return products with a specific tag', async () => {
    const category = 'elegante';
    const res = await myRequest.get(`/tag?tag=${category}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.at.least(1);
  });
  it('should create a new product', async () => {
    const newProduct = {
      name: 'New Product',
      img: 'https://example.com/new-product.jpg',
      price: 100,
      description: 'This is a new product.',
      tags: ['tag1', 'tag2'],
      hot: true,
    };
    const res = await myRequest
      .post('/products')
      .set('Cookie', `token=${jwtToken}`)
      .send(newProduct);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.all.keys(
      '__v',
      '_id',
      'createdAt',
      'description',
      'hide',
      'hot',
      'name',
      'price',
      'tags',
      'updatedAt',
    );
  });
  it('should search for products with a specific query', async () => {
    const query = '';
    const res = await myRequest.get('/search').query({ q: query });
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.at.least(1);
  });

  it('should update a product', async () => {
    const productId = '60b4c47e5f5e5a001f5e5d6e';
    const updatedProduct = {
      price: 200,
      hot: false,
      description: 'This is an updated product.. in English.',
    };
    const res = await myRequest
      .put(`/products/update/${productId}`)
      .send(updatedProduct);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.all.keys(
      '__v',
      '_id',
      'createdAt',
      'description',
      'hide',
      'hot',
      'name',
      'price',
      'tags',
      'updatedAt',
    );
  });

  it('should hide a product', async () => {
    const productId = '60b4c47e5f5e5a001f5e5d6e';
    const res = await myRequest.put(`/hide/${productId}`);
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.deep.equal({
      message: `product with id ${productId} was hidden`,
    });
  });
});

describe('unauthorized user', () => {
  it('should return 401 unauthorized', async () => {
    const productId = '60b4c47e5f5e5a001f5e5d6e';
    const res = await myRequest.put(`/hide/${productId}`);
    expect(res.statusCode).to.equal(401);
  });
  it('should return 401 unauthorized', async () => {
    const productId = '60b4c47e5f5e5a001f5e5d6e';
    const updatedProduct = {
      price: 200,
      hot: false,
      description: 'This is an updated product.. in English.',
    };
    const res = await myRequest
      .put(`/products/update/${productId}`)
      .send(updatedProduct);
    expect(res.statusCode).to.equal(401);
  });
  it('should create a new product', async () => {
    const newProduct = {
      name: 'New Product',
      img: 'https://example.com/new-product.jpg',
      price: 100,
      description: 'This is a new product.',
      tags: ['elegante'],
      hot: true,
    };
    const res = await myRequest.post().send(newProduct);
    expect(res.statusCode).to.equal(401);
  });
});
