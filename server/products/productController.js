import { Router } from 'express';
const router = Router();

router.get('/products/:id', getProductById);
router.get('/products', getProducts);
router.post('/products', createProduct);
router.get('/products/tags/:tag', getProductsByTag);
router.get('/products/search/:query', searchProduct); 
router.put('/products/view/:id', increaseViews);
router.put('/products/update/:id', editProduct);
router.put('/products/delete/:id', hideProduct);
