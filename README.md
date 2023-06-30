# INDEX

- [About this project](#About-this-project)
- [Development Environment Setup](#Development-Environment-Setup)
- [Available Endpoints](#Available-Endpoints)
- [Contribution](#Contribution)
- [Licence](#Licence)

## About this project

This project is a web application developed using Node.js v16.20.1. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and modular approach to building web applications.

## Development Environment Setup

To set up the development environment for this project, follow these steps:

- [Download Docker Desktop](https://www.docker.com/products/docker-desktop/) & [Docker File](https://hub.docker.com/repository/docker/clamshell6412/ecomerce_res_api/general) (production only)

- Or you can just install Node.js [v16.20.1](https://nodejs.org/download/release/latest-gallium/) ([or a compatible version](https://nodejs.org/es/download/releases)) on your system.
- Clone the project repository using `git clone https://github.com/yamilt351/api-rest.git`
- Install project dependencies using npm or yarn. Run `npm install` or `yarn install` in the project root directory.
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
STRIPE_TOKEN=sk_text_YourStripeToken

```

- Start the application using `npm run dev` or `yarn run dev` to launch the application.
- Access the application in a web browser using the provided URL or port number.

# Available Endpoints

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#f3eb5112-676b-46c6-89a2-f5dd6b6c0927)

## Tests

- The aplication was tested with [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest)

```
npm test

```

# Contribution.

-  Read The Documentation
-  Fork The Project
-  Make Atomic Changes , keep them small keep them easy
-  You have to provide Evidences in your PRs (Postman requests,covering  much edge cases as you can)
-  Make `git pull` before create your PR

# Licence
The Project is under GPL Licence
