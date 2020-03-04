const fs = require('fs');
const path = require('path');

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// Get info from json package to use it in Swagger UI
const packageInfo = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')
);

// Swagger Options
const options = {
  swaggerDefinition: {
    components: {},
    info: {
      title: packageInfo.name,
      version: packageInfo.version,
      description: packageInfo.description,
    },
    basePath: `/api`,
  },
  apis: ['./src/controllers/*.js'],
};

const specs = swaggerJSDoc(options);

// Define swagger ui endpoint
app.use(`/`, swaggerUi.serve, swaggerUi.setup(specs));

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorMiddleware.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorMiddleware.developmentErrors);
}

// production error handler
app.use(errorMiddleware.productionErrors);

module.exports = app;
