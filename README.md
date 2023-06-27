# INDEX

- [About this project](#About-this-project)
- [Development Environment Setup](#Development-Environment-Setup)
- [Available Endpoints](#Available-Endpoints)

## About this project

This project is a web application developed using Node.js v16.20.1. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and modular approach to building web applications.

# THIS DOCUMENTATION IS NOT FINISHED AT THE MOMENT
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

| User Actions    | Routes                    | Required                  | Http Verb |
| --------------- | ------------------------- | ------------------------- | --------- |
| Sign In         | `/api/users/signIn`       | email, username, password | Post      |
| Sign Up         | `/api/users/signUp`       | email, password           | Post      |
| User Stats      | `/api/users/stats`        | must by Admin             | Get       |
| Find user by Id | `/api/users/find/:userId` | userId                    | Get       |

[Postman Documentation]()

### Products

| Products Actions     | Routes                            | Required | Http Verb |
| -------------------- | --------------------------------- | -------- | --------- |
| Create Product       | `/api/products/create`            |          | Post      |
| Get All Product      | `/api/products`                   |          | Get       |
| Get Product by Tag   | `/api/products/tag`               |          | Get       |
| Get Product By Query | `/api/products/search`            |          | Get       |
| Get Product By Id    | `/api/products/:productId`        |          | Get       |
| Edit Product Info    | `/api/products/update/:productId` |          | Put       |
| Hide Product         | `/api/products/hide/:productId`   |          | Put       |

[Postman Documentation]()

### Cart

| Cart Actions  | Routes               | Required | Http Verb |
| ------------- | -------------------- | -------- | --------- |
| Create Cart   | `/api/carts/create`  |          | Post      |
| Get All Carts | `/api/carts/getAll`  |          | Get       |
| Get user Cart | `/api/carts/:userId` |          | Get       |
| Edit Cart     | `/api/carts/:cartId` |          | Put       |
| Delete Cart   | `/api/carts/:cartId` |          | Delete    |

[Postman Documentation]()

### Purchases

| Purchases Actions     | Routes                       | Required | Http Verb |
| --------------------- | ---------------------------- | -------- | --------- |
| Create Purchase       | `/api/purchases/create`      |          | Post      |
| Payment               | `/api/purchases/payment`     |          | Post      |
| Get Monthly Purchases | `/api/purchases/monthly`     |          | Get       |
| Get All Purchase      | `/api/purchases/getAll`      |          | Get       |
| Get user Purchase     | `/api/purchases/:userId`     |          | Get       |
| Delete Purchase       | `/api/purchases/:purchaseId` |          | Delete    |
| Edit Purchase         | `/api/purchases/create`      |          | Put       |

[Postman Documentation]()

### Comments

| Comments Actions | Routes                 | Required | Http Verb |
| ---------------- | ---------------------- | -------- | --------- |
| Create Comment   | `/api/comments/create` |          | Post      |
| Delete Comment   | `/api/comments/delete` |          | Delete    |
| Create Comment   | `/api/comments/getAll` |          | Get       |

[Postman Documentation]()

### Responses

| Responses Actions | Routes                               | Required | Http Verb |
| ----------------- | ------------------------------------ | -------- | --------- |
| Create Response   | `/api/responses/create`              |          | Post      |
| Delete Response   | `/api/responses/delete/:responsesId` |          | Delete    |
| Get All Response  | `/api/responses/getAll`              |          | Get       |

[Postman Documentation]()

## Tests

```
npm run test

```
