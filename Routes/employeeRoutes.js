const express = require("express");
const { addNewEmployee, getAllEmployees, getAllEmp } = require("../Controllers/EmployeeController");

const router = express.Router();

router.get("/getallemployees",getAllEmployees);
router.post("/addNewEmployee",addNewEmployee);
router.get("/getallemp",getAllEmp);

module.exports = router