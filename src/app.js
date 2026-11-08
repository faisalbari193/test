const express = require('express');
const router = require('./router');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json());
app.use(router);

module.exports = app;