import user from '../Users/userRoutes.js';
import cart from '../ShopingCart/shoppingCartRoutes.js';
import product from '../Products/productRoutes.js';
import purchase from '../Purchases/purchasesRoutes.js';
import comment from '../Comments/commentsRoutes.js';
import response from '../Responses/responsesRoutes.js';

const apiRouthes = [
    { route: '/api/users', controller: user },
    { route: '/api/carts', controller: cart },
    { route: '/api/purchases', controller: purchase },
    { route: '/api/products', controller: product },
    { route: '/api/comments', controller: comment },
    { route: '/api/responses', controller: response },
  ];
  export default apiRouthes
