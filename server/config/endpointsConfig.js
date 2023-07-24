import user from '../application/users/userRoutes.js';
import cart from '../application/shopingCart/shoppingCartRoutes.js';
import product from '../application/products/productRoutes.js';
import purchase from '../application/purchases/purchasesRoutes.js';
import comment from '../application/comments/commentsRoutes.js';
import response from '../application/responses/responsesRoutes.js';

const apiRouthes = [
    { route: '/api/users', controller: user },
    { route: '/api/carts', controller: cart },
    { route: '/api/purchases', controller: purchase },
    { route: '/api/products', controller: product },
    { route: '/api/comments', controller: comment },
    { route: '/api/responses', controller: response },
  ];
  export default apiRouthes
