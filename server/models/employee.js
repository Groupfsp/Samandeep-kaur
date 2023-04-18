const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

        firstName:String,
        lastName:String,
        age:Number,
        dateOfJoining:{type: Date,default:new Date()},
        department:String,
        employeeType:String,
        title:String,
        currentStatus: {type:Boolean,default: 1}

});

const Employee = mongoose.model('Employee', EmployeeSchema, "employees");
module.exports = Employee;