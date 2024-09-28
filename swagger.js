const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: "Users API"
    },
    host: 'localhost:3000',
    schemas: ['http']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

// generate swagger file
swaggerAutogen(outputFile,endpointFiles,doc);