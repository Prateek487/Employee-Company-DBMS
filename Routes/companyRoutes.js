const express = require("express");
const { getAllCompanies, addNewCompany, getCompanyLike } = require("../Controllers/CompanyController");

const router = express.Router();

router.get("/getallcompanies",getAllCompanies);
router.post("/addnewcompany", addNewCompany);
router.get("/getcompanies",getCompanyLike);

module.exports = router;