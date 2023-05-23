import { Router } from 'express';
const router = Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.put('/users/:userId', editUser);
router.get('/users/:userId', getUser);

// Wishlist
router.put('/users/:userId/wishlist/add/:productId', addToWishlist);
router.delete('/users/:userId/wishlist/remove/:productId', removeFromWishlist);
router.get('/users/:userId/wishlist', getWishlist);

export default router
