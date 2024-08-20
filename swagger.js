// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Photo API Documentation',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:50',
        description: 'Development server',
      },
    ],
  },
  apis: ['./index.js', './modules/photos/photos.routes.js'], // Paths to files with Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
