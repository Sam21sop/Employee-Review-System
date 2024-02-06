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


// view employees
export const getAllEmployeesRepo = async()=>{
    return await employeeModel.find()
}


// update employees
export const updateEmployeeRepo = async(employeeId)=>{
    // find the employee with given id

    // update employee

    // save updated employee
};


// remove employees
export const removeEmployeeRepo = async(employeeId) => {
    // find the given emplyee details

    // delete founded employee details

    // update in the database
}


