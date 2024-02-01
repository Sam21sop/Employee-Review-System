import ErrorHandler from "../utils/errorHandler.js";
import { createNewEmployeeRepo, findEmployeeRepo } from "../repository/adminRepository.js";
import sendToken from "../utils/sendTokenToCookie.js";


export const createNewEmployeeController = async(req, res, next) => {
    // get email from req body
    const {email} = req.body;

    try {
        const user = await findEmployeeRepo({email});
        // check employee alredy present in the database
        if(user){
            return next(new ErrorHandler(400, "Email already registered!"));
        }

        // create new employee
        const newEmployee = await createNewEmployeeRepo(req.body);

        // send json web token
        await sendToken(newEmployee, res, 200);

    } catch (error) {
        console.log(error);
        return next(new ErrorHandler(500, error));
    }
};



export const employeeLoginController = async(req, res, next) => {
    // get required data from body 
    const {email, password} = req.body;

    try {
        if (!email) {
            // if email is empty or undefined
            return next(new ErrorHandler(400, "Please Enter Email."));
        };
        if (!password) {
            // if password is empty or undefined
            return next(new ErrorHandler(400, "Please Enter Password."));
        };

        // find the employee in the database
        const employee = await findEmployeeRepo({email}, true);
        if(!employee){
            // if user not found
            return next(new ErrorHandler(404, "User not found!"))
        };

        // compare password
        const isValidPassword = await employee.comparePassword(password);
        if(!isValidPassword){
            return next(new ErrorHandler(401, "invalid password!"))
        };

        // send appropriate response with token
        await sendToken(employee, res, 200);
    } catch (error) {
        return next(new ErrorHandler(400, error));
    }
}