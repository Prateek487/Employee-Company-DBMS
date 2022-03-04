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

const MongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vmqwb.mongodb.net/${process.env.MONGO_DATABASE}`;
const Port = "4000";
mongoose
  .connect(MongoURL)
  .then((result) => {
    app.listen(process.env.PORT || Port, () => {
      console.log("Starting server at port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
