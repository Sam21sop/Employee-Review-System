import { getAllEmployeesRepo } from "../repository/employeeRepository.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendTokenToCookie.js";


// employee database
export const getAllEmployeeController = async (req, res, next) => {
    try {
        const employees = await getAllEmployeesRepo();
        res.render('dashboard', {employees});

    } catch (error) {
        console.log(error);
        return next(new ErrorHandler(500, error));
    }
};


export const addEmployeeController = (req, res, next) => {

};


export const removeEmployeeController = (req, res, next) => {

};


export const updateEmployeeController = (req, res, next) => {

};


// review database operation
export const getAllReviewsController = (req, res, next) => {

};

export const addReviewsController = (req, res, next) => {

};

export const updateReviewsController = (req, res, next) => {

};