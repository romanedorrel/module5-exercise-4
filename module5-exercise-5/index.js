const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const port = 2301;

app.use(express.json());

app.use('/', express.static('public2'));
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})