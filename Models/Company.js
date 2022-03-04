const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    Name: {
        required:true,
        type:String
    },
    Number_of_empl : {
        required:true,
        type:Number
    }
})


module.exports = mongoose.model("Company",CompanySchema);