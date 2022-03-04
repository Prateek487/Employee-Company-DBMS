const express = require("express");
const mongoose = require("mongoose");

const company = require('./Routes/companyRoutes');
const employee = require('./Routes/employeeRoutes');

const app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());

app.use(company); 
app.use(employee);

mongoose
  .connect('mongodb+srv://Prateek487:1234567890@cluster0.vmqwb.mongodb.net/test')
  .then((result) => {
    app.listen("4000", () => {
      console.log("Starting server at port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
