import employeeModel from "../models/employeeSchema.js";


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
