const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerUI = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express();
const port = 2351;

app.use(express.json());

app.use('/', express.static('public'));

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})