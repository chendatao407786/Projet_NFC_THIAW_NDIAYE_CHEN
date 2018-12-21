const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const mlabUrl = 'mongodb://chendatao:Bonjour1941@ds241664.mlab.com:41664/easycommand';

const user = require('./routers/api/user');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

mongoose
    .connect(mlabUrl)
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

app.use('/api/user',user);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server started at ' + port));