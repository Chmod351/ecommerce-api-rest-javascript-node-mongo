<img src="https://github.com/yamilt351/api-rest/assets/88646148/6fa7be51-ea03-4be7-9f31-3b6365e68f46" width="100" height="100" align="center">


# INDEX
- [About this project](#About-this-project)
- [Development Environment Setup](#Development-Environment-Setup)
- [Available Endpoints](#Available-Endpoints)
- [Contribution](#Contribution)
- [Licence](#Licence)
- [live Demo](https://ciervademo.onrender.com/)

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

```
SECRET:your_google_oauth_secret
```

```
CLIENTID:your_google_oauth_cliendId
```


- Start the application using `npm run dev` or `yarn run dev` to launch the application.
- Access the application in a web browser using the provided URL or port number.

# Available Endpoints

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#f3eb5112-676b-46c6-89a2-f5dd6b6c0927)

## Tests

- The aplication was tested with [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest)
```
npm run test

```

# Live demo & Product Explanation.

[Demo](https://ciervademo.onrender.com/)
This a simple demo. 
Shoping Cart State is hanlde by the frontend, so you can store the shoping cart items init and still keep it even if the user is not loged into the app.
This guarantee an excelent user experience btw, bc the user can explore your site before making orders.
The backend provide pagination for some routes, for more info [check the Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#f3eb5112-676b-46c6-89a2-f5dd6b6c0927)


# Contribution.

-  Read The Documentation
-  Fork The Project
-  Make Atomic Changes , keep them small keep them easy
-  You have to provide Evidences in your PRs (Postman requests,covering  much edge cases as you can)
-  Make `git pull` before create your PR

# Licence
The Project is under GPL Licence
