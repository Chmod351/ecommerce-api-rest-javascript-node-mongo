import request from 'supertest';
import { Router } from 'express';
import cartController from './shopingCartController.js';
import authMiddleware from '../helpers/jwt.js';
import adminCheck from '../helpers/adminCheck.js';
import { cleanBody } from '../helpers/sanitizer.js';

const router = Router();

// Mock authMiddleware and adminCheck
jest.mock('../helpers/jwt.js', () => jest.fn());
jest.mock('../helpers/adminCheck.js', () => jest.fn());

// Mock cartController methods
cartController.createCart = jest.fn();
cartController.getAll = jest.fn();
cartController.getUserCart = jest.fn();
cartController.editCart = jest.fn();
cartController.deleteCart = jest.fn();

// Mock router methods
router.post = jest.fn();
router.get = jest.fn();
router.put = jest.fn();
router.delete = jest.fn();

describe('Cart Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call the appropriate methods when POST /create is called', async () => {
    router.post('/create', authMiddleware, cleanBody, cartController.createCart);

    const req = { body: { products: [] }, user: { id: 'user_id' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    await request(router).post('/create').send(req.body).set('Authorization', 'Bearer token');

    expect(authMiddleware).toHaveBeenCalled();
    expect(cleanBody).toHaveBeenCalled();
    expect(cartController.createCart).toHaveBeenCalledWith(req, res, next);
  });

  it('should call the appropriate methods when GET /getAll is called', async () => {
    router.get('/getAll', authMiddleware, adminCheck, cartController.getAll);

    const req = { query: { page: '1', size: '10' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    await request(router).get('/getAll').query(req.query).set('Authorization', 'Bearer token');

    expect(authMiddleware).toHaveBeenCalled();
    expect(adminCheck).toHaveBeenCalled();
    expect(cartController.getAll).toHaveBeenCalledWith(req, res, next);
  });

  it('should call the appropriate methods when GET /:userId is called', async () => {
    router.get('/:userId', authMiddleware, cartController.getUserCart);

    const req = { params: { userId: 'user_id' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    await request(router).get(`/${req.params.userId}`).set('Authorization', 'Bearer token');

    expect(authMiddleware).toHaveBeenCalled();
    expect(cartController.getUserCart).toHaveBeenCalledWith(req, res, next);
  });

  it('should call the appropriate methods when PUT /update/:cartId is called', async () => {
    router.put('/update/:cartId', authMiddleware, cleanBody, cartController.editCart);

    const req = { body: {}, params: { cartId: 'cart_id' }, user: { id: 'user_id' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    await request(router)
      .put(`/update/${req.params.cartId}`)
      .send(req.body)
      .set('Authorization', 'Bearer token');

    expect(authMiddleware).toHaveBeenCalled();
    expect(cleanBody).toHaveBeenCalled();
    expect(cartController.editCart).toHaveBeenCalledWith(req, res, next);
  });

  it('should call the appropriate methods when DELETE /delete/:cartId is called', async () => {
    router.delete('/delete/:cartId', authMiddleware, cartController.deleteCart);

    const req ={ params: { cartId: 'cart_id' }, user: { id: 'user_id' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    await request(router).delete(`/delete/${req.params.cartId}`).set('Authorization', 'Bearer token');

    expect(authMiddleware).toHaveBeenCalled();
    expect(cartController.deleteCart).toHaveBeenCalledWith(req, res, next);
  });
});
