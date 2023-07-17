

![68747470733a2f2f6861636b65726e6f6f6e2e636f6d2f686e2d696d616765732f312a6c41523955685f674a376470323365307668793548672e706e67](https://github.com/yamilt351/api-rest/assets/88646148/6fa7be51-ea03-4be7-9f31-3b6365e68f46){: style="width: 100px; height: 100px;"}

# INDEX
- [About this project](#About-this-project)
- [Development Environment Setup](#Development-Environment-Setup)
- [Available Endpoints](#Available-Endpoints)
- [Contribution](#Contribution)
- [Licence](#Licence)

## About this project

This is a fully functional e-commerce platform that will allow you to have a solid foundation as an initial project, even deploy it.
The project uses JSON Web Token for session management,
Google OAuth as an alternative for logging in,
Stripe as the payment gateway.
Feel free to collaborate/fork the project.

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
