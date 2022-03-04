const mongoose = require("mongoose");

const Company = require("./Company");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  employee_Name: {
    required: true,
    type: String,
  },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
});


module.exports = mongoose.model("Employee", EmployeeSchema);