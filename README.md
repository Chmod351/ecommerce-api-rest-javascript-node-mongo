# INDEX

- [About this project](#About-this-project)
- [Project Structure](#Project-Structure])
- [Development Environment Setup](#Development-Environment-Setup]])
- [Available Endpoints](#Available-Endpoints])

## About this project

    This project is a web application developed using Node.js v16.20.1. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and modular approach to building web applications. The project utilizes various libraries and technologies to enable efficient development and implementation

# Project Structure

    The project follows a well-organized structure to enhance maintainability and scalability. The main components and directories in the project are as follows:

- Models: Contains the schema definitions for different data entities and handles interactions with the MongoDB database.
- Controllers: Implements the application logic and handles the processing of HTTP requests, data validation, and business operations.
- Routes: Defines the API endpoints and maps them to their respective controller methods.
- Services: Is responsible for managing the business logic and operations related to a specific service or functionality within the application.
- Middlewares: Contains custom middleware functions used for request validation, authentication, error handling, and other common tasks.
- Helpers: Provides reusable helper functions for tasks such as password encryption, token generation, data sanitization, and more.

## Development Environment Setup

To set up the development environment for this project, follow these steps:

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

| User                            | Routes        | Required                            | Http Verb |
| ------------------------------- | ------------- | ----------------------------------- | --------- |
| [Create Post](#create-new-post) | `/api/posts/` | {userId},title,description, imgUrl. | Post      |

Postman Documentation

### Products

| Products                        | Routes        | Required                            | Http Verb |
| ------------------------------- | ------------- | ----------------------------------- | --------- |
| [Create Post](#create-new-post) | `/api/posts/` | {userId},title,description, imgUrl. | Post      |

Postman Documentation

### Cart

| Cart                            | Routes        | Required                            | Http Verb |
| ------------------------------- | ------------- | ----------------------------------- | --------- |
| [Create Post](#create-new-post) | `/api/posts/` | {userId},title,description, imgUrl. | Post      |

Postman Documentation

### Purchases

| Purchases                       | Routes        | Required                            | Http Verb |
| ------------------------------- | ------------- | ----------------------------------- | --------- |
| [Create Post](#create-new-post) | `/api/posts/` | {userId},title,description, imgUrl. | Post      |

Postman Documentation

### Comments

| Comments                        | Routes        | Required                            | Http Verb |
| ------------------------------- | ------------- | ----------------------------------- | --------- |
| [Create Post](#create-new-post) | `/api/posts/` | {userId},title,description, imgUrl. | Post      |

Postman here

### Responses

| Responses                       | Routes        | Required                            | Http Verb |
| ------------------------------- | ------------- | ----------------------------------- | --------- |
| [Create Post](#create-new-post) | `/api/posts/` | {userId},title,description, imgUrl. | Post      |

Postman Documentation

## Tests

```
npm run test

```
