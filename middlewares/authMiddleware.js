import jwt from 'jsonwebtoken';
import ErrorHandler from '../utils/errorHandler.js';
import employeeModel from '../models/employeeModel.js';
import processEnvVar from '../utils/processEnvVar.js';

// login authorization
export const authorization = async (req, res, next) => {
    const {token} = req.cookie;
    if(!token){
        return next(new ErrorHandler(401, 'login to invalid!'));
    };

    const verifyData = await jwt.verify(token, processEnvVar.JWT_SECRETE);
    req.employee = await employeeModel.findById(verifyData.id);
    next();
};


// this middleware for admin access only
export const authorizeByAdmin = async (req, res, next) => {
    return async (req, res, next) => {
        if(role.include(req.employee.role !== 'admin')){
            return next(new ErrorHandler(403, `Role: ${req.employee.role} is not allowed to access this resources.`))
        };
        next();
    };
};