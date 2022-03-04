const Company = require("../Models/Company");
const Employee = require("../Models/Employee");

exports.getAllEmployees = (req, res, next) => {
  Company.findOne({ Name: req.body.Company_Name })
    .then((company) => {
      if (!company) {
        throw new Error("Company not Found");
      }
      console.log("result", company);
      return Employee.find({ company: company._id }).populate("company");
    })
    .then((companies) => {
      res.status(200).json(companies);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllEmp = (req, res, next) => {
  //done
  Employee.find()
    .populate("company")
    .then((Employees) => {
      res.status(200).json(Employees);
    })
    .catch((err) => console.log(err));
};
exports.addNewEmployee = (req, res, next) => {
  //done
  Company.findOneAndUpdate(
    { Name: req.body.Company_Name },
    { $inc: { Number_of_empl: 1 } }
  )
    .then((result) => {
      if (!result) {
        throw new Error("Company Not Found");
      }
      console.log(result);
      const NewEmployee = new Employee({
        employee_Name: req.body.employee_Name,
        company: result._id,
      });
      return NewEmployee.save();
    })
    .then((result) => res.status(200).json({ Employee_Id: result._id }))
    .catch((err) => console.log(err));
};
