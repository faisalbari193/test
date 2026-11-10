const express = require("express");
const cors = require("cors");
const router = require("./router");
const connectDB = require("./config/db");
const app = express();
connectDB();
app.use(express.json());
app.use(router);
app.use(cors());

module.exports = app;
