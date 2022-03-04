const Company = require("../Models/Company");

exports.getAllCompanies = (req, res, next) => {
  Company.find()
    .sort({ Number_of_empl: -1 })
    .then((companies) => {
      res.status(200).json(companies);
    })
    .catch((err) => console.log(err));
};
exports.getCompanyLike = (req, res, next) => {
  const CompName = req.body.Company_Name;
  Company.find({ Name: { $regex: CompName, $options: "i" } })
    .then((companies) => {
      res.status(200).json(companies);
    })
    .catch((err) => console.log(err));
};
exports.addNewCompany = (req, res, next) => {
  console.log(req.body.Name);
  const NewCompany = new Company({ Name: req.body.Name, Number_of_empl: 0 });
  NewCompany.save()
    .then((result) => {
      res.status(200).json({ Company_id: result._id });
    })
    .catch((err) => {
      console.log(err);
    });
};
