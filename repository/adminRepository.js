import employeeModel from "../models/employeeModel.js";

// create new employee repo
export const createNewEmployeeRepo = async (employeData)=>{
    return await new employeeModel(employeData).save();
};


// find existing employee repo
export const findEmployeeRepo = async(factor, withPassword=false)=>{
    if(withPassword) 
        return await employeeModel.findOne(factor).select("+password");
    else 
        return await employeeModel.findOne(factor);
};


// Add employees
// view employees
// update employees
// remove employees

// view performance reviews
// Add performance reviews
// update performance reviews