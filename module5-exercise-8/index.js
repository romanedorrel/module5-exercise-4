const express = require('express');
const storeRoutes = require('./routes/storeRoutes');
const swaggerUI = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express();
const port = 4000;

app.use(express.json());

app.use('/', express.static('public'));

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.use('/store', storeRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})