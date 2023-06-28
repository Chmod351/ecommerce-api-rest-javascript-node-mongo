# INDEX

- [About this project](#About-this-project)
- [Development Environment Setup](#Development-Environment-Setup)
- [Available Endpoints](#Available-Endpoints)

## About this project

This project is a web application developed using Node.js v16.20.1. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and modular approach to building web applications.

## Development Environment Setup

To set up the development environment for this project, follow these steps:

- [Docker File](https://hub.docker.com/repository/docker/clamshell6412/ecomerce_res_api/general) (production only)
- Install Node.js v16.20.1 (or a compatible version) on your system.
- Clone the project repository from [repository URL].
- Install project dependencies using npm or yarn. Run npm install or yarn install in the project root directory.
- Configure the environment variables required for the project.

```
MONGO=mongodb+srv://USERNAME:PASSWORD@cluster0.4g3ly.mongodb.net/ecomerce?retryWrites=true&w=majority
```

```
JWT_TOKEN=z&&2DbCJa9d3gZkxFwJdE$&hHbRe47KHxAF%&N#qRVx*zVFG$W
```

```
PORT=3000
```

```
STRIPE_TOKEN=sk_text_z&&2DbCJa9d3gZkxFwJdE$&hHbRe47KHxAF%&N#qRVx*zVFG$W

```

- Start the application using the appropriate command. Run npm run dev or yarn run dev to launch the application.
- Access the application in a web browser using the provided URL or port number.

# Available Endpoints

### User

| User Actions    | Routes                    | Http Verb |
| --------------- | ------------------------- | --------- |
| Sign In         | `/api/users/signIn`       | Post      |
| Sign Up         | `/api/users/signUp`       | Post      |
| User Stats      | `/api/users/stats`        | Get       |
| Find user by Id | `/api/users/find/:userId` | Get       |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#f3eb5112-676b-46c6-89a2-f5dd6b6c0927)

### Products

| Products Actions     | Routes                            | Http Verb |
| -------------------- | --------------------------------- | --------- |
| Create Product       | `/api/products/create`            | Post      |
| Get All Product      | `/api/products`                   | Get       |
| Get Product by Tag   | `/api/products/tag`               | Get       |
| Get Product By Query | `/api/products/search`            | Get       |
| Get Product By Id    | `/api/products/:productId`        | Get       |
| Edit Product Info    | `/api/products/update/:productId` | Put       |
| Delete Product       | `/api/products/delete/:productId` | Put       |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#da18f92d-0285-461d-86d8-af8f93f4b079)

### Cart

| Cart Actions  | Routes               | Http Verb |
| ------------- | -------------------- | --------- |
| Create Cart   | `/api/carts/create`  | Post      |
| Get All Carts | `/api/carts/getAll`  | Get       |
| Get user Cart | `/api/carts/:userId` | Get       |
| Edit Cart     | `/api/carts/:cartId` | Put       |
| Delete Cart   | `/api/carts/:cartId` | Delete    |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#30fad45b-31df-4ebc-a672-1a16c89c1267)

### Purchases

| Purchases Actions     | Routes                              | Http Verb |
| --------------------- | ----------------------------------- | --------- |
| Create Purchase       | `/api/purchases/create`             | Post      |
| Payment               | `/api/purchases/payment`            | Post      |
| Get Monthly Purchases | `/api/purchases/monthly`            | Get       |
| Get All Purchase      | `/api/purchases/getAll`             | Get       |
| Get user Purchase     | `/api/purchases/:userId`            | Get       |
| Delete Purchase       | `/api/purchases/:purchaseId`        | Delete    |
| Edit Status Purchase  | `/api/purchases/status/:purchaseId` | Put       |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#31c36708-d610-4480-8c8a-628bb32dcfde)

## Tests

```
npm run test

```
